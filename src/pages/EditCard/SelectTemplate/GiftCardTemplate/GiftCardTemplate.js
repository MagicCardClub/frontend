import React, { useState, useRef } from "react";
import "./GiftCardTemplate.scss";
import { landingCarousel as giftcardtemplates } from "data/landingCarousel";
import { useLocalStorage } from "hooks/useLocalStorage";

const GiftCardTemplate = (props) => {
  const [activeCard, setActiveCard] = useState(0);

  //using custom hook to set frame of card
  const [storedBgIndex, setStoredBgIndex] = useLocalStorage("bgIndex", "");

  const { color, changeBackground, handleSelectedTemplate, editModalBg } =
    props;

  //ref for targetting active gift card template
  const activeTemplate = useRef(false);

  //setting active gift card template index
  const handleActiveCard = (index) => {
    setActiveCard(index);
    setStoredBgIndex(index);
    console.log(storedBgIndex);
    activeTemplate.current = true;
  };

  return (
    <div className="gc-template">
      <div className="box" style={{ backgroundColor: editModalBg }}></div>
      <div className="templates">
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
