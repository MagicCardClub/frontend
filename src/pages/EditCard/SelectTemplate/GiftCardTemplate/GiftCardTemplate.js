import React, { useState, useRef, useEffect } from "react";
import "./GiftCardTemplate.scss";
import { landingCarousel as giftcardtemplates } from "data/landingCarousel";

const GiftCardTemplate = (props) => {
  const [activeCard, setActiveCard] = useState(0);

  const { color, changeBackground, handleSelectedTemplate, editModalBg } =
    props;

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //ref for targetting active gift card template
  const activeTemplate = useRef(false);

  //setting active gift card template index
  const handleActiveCard = (index) => {
    setActiveCard(index);
    activeTemplate.current = true;
  };

  //handling blur event to set any
  // active gift card template to non-active
  const handleClickOutside = () => {
    if (activeTemplate.current) {
      setActiveCard(null);
      activeTemplate.current = false;
    }
  };

  return (
    <div className="gc-template">
      <div className="box" style={{ backgroundColor: editModalBg }}></div>
      <div className="templates">
        {" "}
        {giftcardtemplates.map((template, index) => {
          const { id, card } = template;
          return (
            <span
              ref={activeTemplate}
              className={index === activeCard ? "active-edit-card" : ""}
              key={id}
              onClick={() => {
                handleSelectedTemplate(index);
                changeBackground(index);
                handleActiveCard(index);
              }}
              style={{
                boxShadow:
                  index === activeCard ? `0px 0px 5px 8px ${color}` : "",
              }}
            >
              <img src={card} alt={id} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default GiftCardTemplate;
