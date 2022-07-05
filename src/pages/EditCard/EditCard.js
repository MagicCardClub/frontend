import React, { useState } from "react";
import "./EditCard.scss";
import SelectTemplate from "components/shared/SelectTemplate/SelectTemplate";
import EditCardModal from "components/EditCardModal/EditCardModal";
import { blankCard } from "data/blankCard";
import { GiFeather } from "react-icons/gi";

const EditCard = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [blankCards, setCards] = useState(blankCard);
  const [cardOptions, setCardOptions] = useState(0);
  const [ethereumCount, setEthereumCount] = useState(0.025);

  //sets index for selected template for editing blank cards
  const handleSelectedTemplate = (templateId) => {
    if (templateId > blankCards.length - 1) {
      setSelectedTemplate(0);
    } else {
      setSelectedTemplate(templateId);
    }
  };

  const addToEthereum = () => {
    setEthereumCount(ethereumCount + 0.5);
    console.log(ethereumCount.toFixed(3));
  };

  const decreaseEthereum = () => {
    setEthereumCount(ethereumCount - 0.5);
    console.log(ethereumCount.toFixed(3));
  };

  const cards = blankCards[selectedTemplate];

  const { id, image, color } = cards.options[cardOptions];

  return (
    <div className="edit-card">
      <div className="edit-header">
        <div className="box-1"></div>
        <div className="box-2">
          <span>Mint price per NFT Gift Card = 0.025 ETH</span>
        </div>
      </div>

      <SelectTemplate handleSelectedTemplate={handleSelectedTemplate} />
      <div className="edit-card-modal_container">
        <EditCardModal
          key={id}
          image={image}
          color={color}
          ethereumCount={ethereumCount}
        />

        <div
          className="add-details_container"
          style={{ borderWidth: 2, borderColor: color, borderStyle: "solid" }}
        >
          <button className="add-user-image_btn">+</button>

          <button className="add-user-name_btn">
            <GiFeather />
          </button>

          <div
            className="add-name_modal"
            style={{ borderWidth: 1, borderColor: color, borderStyle: "solid" }}
          >
            <input type="text" />
            <button>Save</button>
          </div>

          <div className="card-color_options">
            {cards.options.map((card, index) => {
              return (
                <span
                  key={index}
                  className="color"
                  style={{ backgroundColor: card.color }}
                  onClick={() => {
                    setCardOptions(index);
                  }}
                ></span>
              );
            })}
          </div>

          <div className="eth-counts">
            <div className="eth-count_btns">
              <button onClick={decreaseEthereum}>-</button>
              <span>0.5</span>
              <button onClick={addToEthereum}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
