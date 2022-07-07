import React, { useState, useRef, useEffect, useReducer } from "react";
import "./Carousel.scss";
import { landingCarousel as slides } from "data/landingCarousel";

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

//Reducers

const initialState = {
  slideIndex: 1,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex:
        state.slideIndex !== slides.length - 1 ? state.slideIndex + 1 : 0,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div className="slideBackground" />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.card}')`,
        }}
      ></div>
    </div>
  );
}

function Carousel(props) {
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  const [slideIndex, setSlideIndex] = useState(3);
  const { changeBackground } = props;

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
      dispatch({ type: "NEXT" });
    };
    const interval = setInterval(play, 20000);
    changeBackground(state.slideIndex);

    console.log(state.slideIndex);

    return () => {
      clearInterval(interval);
    };
  }, [changeBackground, state.slideIndex]);

  const nextSlide = () => {
    if (slideIndex !== slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
    }
  };

  return (
    <div className="slides">
      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
    </div>
  );
}

export default Carousel;
