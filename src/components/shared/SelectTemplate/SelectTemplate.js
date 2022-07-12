import React from "react";
import "./SelectTemplate.scss";
import GiftCardTemplate from "../GiftCardTemplate/GiftCardTemplate";

const SelectTemplate = ({ handleSelectedTemplate }) => {
  return (
    <div>
      <div className="select-gift-card">
        <div className="selectcard-header">
          <span>Select gift card template</span>{" "}
        </div>
        <GiftCardTemplate handleSelectedTemplate={handleSelectedTemplate} />
        <svg>
          <defs>
            <filter id="round">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="5"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default SelectTemplate;
