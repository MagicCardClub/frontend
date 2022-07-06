import React, { useState, useRef, useEffect } from "react";
import "./Carousel.scss";
// import { landingCarousel } from "data/landingCarousel";

const Carousel = (props) => {
  const [slideIndex, setSlideIndex] = useState(3);
  const { carousel, changeBackground } = props;

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 30000);
    changeBackground(slideIndex);
    console.log(slideIndex);

    return () => {
      clearInterval(interval);
    };
  }, [changeBackground, slideIndex]);

  const nextSlide = () => {
    if (slideIndex !== carousel.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === carousel.length - 1) {
      setSlideIndex(0);
    }
  };

  return (
    <div className="carousel">
      {carousel.map((template, index) => {
        const { card, description } = template;
        return (
          <div
            className={slideIndex === index ? "active-template" : "template"}
            key={index}
          >
            <img src={card} alt={description} />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
