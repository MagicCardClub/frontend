import React from "react";
import "./SelectTemplate.scss";
import GiftCardTemplate from "./GiftCardTemplate/GiftCardTemplate";

const SelectTemplate = (props) => {
  const {
    color,
    changeBackground,
    handleSelectedTemplate,
    editButtonColor,
    editModalBg,
  } = props;

  return (
    <div>
      <div className="select-gift-card">
        <div
          className="selectcard-header"
          style={{ backgroundColor: editButtonColor }}
        >
          <span>Select gift card template</span>{" "}
        </div>
        <GiftCardTemplate
          color={color}
          handleSelectedTemplate={handleSelectedTemplate}
          changeBackground={changeBackground}
          editModalBg={editModalBg}
        />
      </div>
    </div>
  );
};

export default SelectTemplate;
