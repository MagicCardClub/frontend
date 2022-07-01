import React, { useState } from "react";
import "./GiftCardTemplate.scss";
import { giftcardtemplates } from "../../data/templates";

const GiftCardTemplate = ({ handleSelectedTemplate }) => {
  const [activeEdit, setActiveEdit] = useState(null);

  const setActive = (index) => {
    setActiveEdit(index);
  };
  return (
    <div className="gc-template">
      {giftcardtemplates.map((template, index) => {
        const { id, image, text } = template;
        return (
          <span
            className={index === activeEdit ? "active-edit-card" : ""}
            key={index}
            onClick={() => {
              handleSelectedTemplate(id);
              setActive(index);
            }}
          >
            <img
              src={image}
              alt={text}
              style={{ width: "110px", height: "120px" }}
            />
          </span>
        );
      })}
    </div>
  );
};

export default GiftCardTemplate;
