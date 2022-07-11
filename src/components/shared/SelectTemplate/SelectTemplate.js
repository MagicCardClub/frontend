import React from "react";
import "./SelectTemplate.scss";
import GiftCardTemplate from "../GiftCardTemplate/GiftCardTemplate";

const SelectTemplate = ({ handleSelectedTemplate }) => {
  return (
    <div>
      <div className="select-gift-card">
        <div className="selectcard-header">Select gift card template</div>
        <GiftCardTemplate handleSelectedTemplate={handleSelectedTemplate} />
      </div>
    </div>
  );
};

export default SelectTemplate;
