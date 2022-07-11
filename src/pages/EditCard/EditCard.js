import React, { useState } from "react";
import { GiFeather } from "react-icons/gi";

import "./EditCard.scss";
import InfoHeader from "components/shared/InfoHeader/InfoHeader";
import SelectTemplate from "components/shared/SelectTemplate/SelectTemplate";
import EditCardModal from "components/EditCardModal/EditCardModal";
import { blankCard } from "data/blankCard";
import { useLocalStorage } from "hooks/useLocalStorage";

const EditCard = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [cardOption, setCardOptions] = useState(0);
  const [ethereumCount, setEthereumCount] = useState(0.025);
  const [nameModal, setNameModal] = useState(false);
  const [username, setUserName] = useState("");

  //saves username to local storage
  const [name, setName] = useLocalStorage("name", "");

  //sets index for selected template for editing blank cards
  const handleSelectedTemplate = (templateId) => {
    if (templateId > blankCard.length) {
      setSelectedTemplate(0);
    } else {
      setSelectedTemplate(templateId);
    }
  };

  const addToEthereum = () => {
    if (ethereumCount < 0) {
      setEthereumCount(0.025);
    } else {
      setEthereumCount(ethereumCount + 0.025);
    }

    console.log(ethereumCount.toFixed(3));
  };

  const decreaseEthereum = () => {
    setEthereumCount(ethereumCount - 0.025);
    console.log(ethereumCount.toFixed(3));
  };

  const cards = blankCard[selectedTemplate];

  const { id, image, color } = cards.options[cardOption];

  return (
    <div className="edit-card">
      <InfoHeader />
      <SelectTemplate handleSelectedTemplate={handleSelectedTemplate} />
      <div className="edit-card-modal_container">
        <EditCardModal
          key={id}
          image={image}
          color={color}
          ethereumCount={ethereumCount}
          name={name}
        />

        <div
          className="add-details_container"
          style={{ borderWidth: 2, borderColor: color, borderStyle: "solid" }}
        >
          <button className="add-user-image_btn">+</button>

          <button className="add-user-name_btn">
            <GiFeather
              className="icon"
              onClick={() => {
                setNameModal(true);
              }}
            />
          </button>

          <div
            className={`add-name_modal ${nameModal ? "open" : ""}`}
            style={{ border: `1px solid ${color}` }}
          >
            <form className="content">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <button
                style={{
                  backgroundColor: color,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setNameModal(false);
                  setName(username);
                  setUserName("");
                }}
              >
                Save
              </button>
            </form>
          </div>

          <div className="card-color_options">
            {cards.options.map((card, index) => {
              return (
                <span
                  key={index}
                  className={index === cardOption ? "active-color" : "color"}
                  style={{
                    backgroundColor: card.color,
                    borderColor: index === cardOption ? "white" : "transparent",
                    borderWidth: 2,
                    borderStyle: "solid",
                  }}
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

        <button className="done-btn">DONE</button>
      </div>
    </div>
  );
};

export default EditCard;
