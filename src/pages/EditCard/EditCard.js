import React, { useState } from "react";
import { GiFeather } from "react-icons/gi";
import { Link } from "react-router-dom";

import "./EditCard.scss";
import InfoHeader from "components/shared/InfoHeader/InfoHeader";
import SelectTemplate from "pages/EditCard/SelectTemplate/SelectTemplate";
import EditCardModal from "pages/EditCard/EditCardModal/EditCardModal";
import { blankCard } from "data/blankCard";
import { useLocalStorage } from "hooks/useLocalStorage";

const EditCard = (props) => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [cardOption, setCardOptions] = useState(0);
  const [ethereumCount, setEthereumCount] = useState(0.025);
  const [nameModal, setNameModal] = useState(false);
  const [username, setUserName] = useState("");

  //props
  const { changeBackground, editButtonColor, editModalBg } = props;

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
      <SelectTemplate
        color={color}
        handleSelectedTemplate={handleSelectedTemplate}
        changeBackground={changeBackground}
        editButtonColor={editButtonColor}
        editModalBg={editModalBg}
      />
      <div
        className="edit-card-modal_container"
        style={{ backgroundColor: editModalBg }}
      >
        <EditCardModal
          key={id}
          image={image}
          color={color}
          ethereumCount={ethereumCount}
          name={name}
          editModalBg={editModalBg}
        />

        <div
          className="add-details_container"
          style={{ borderWidth: 2, borderColor: color, borderStyle: "solid" }}
        >
          <button className="add-user-image_btn">+</button>

          <button
            className="add-user-name_btn"
            onClick={() => {
              setNameModal(true);
            }}
          >
            <GiFeather className="icon" />
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
        <Link to="/mint">
          <button
            className="done-btn"
            style={{ backgroundColor: editButtonColor }}
          >
            DONE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditCard;
