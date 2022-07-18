import React, { useState, createRef, useRef } from "react";
import { FaFeatherAlt } from "react-icons/fa";

import "./EditCard.scss";
import Mint from "pages/EditCard/Mint/Mint";
import InfoHeader from "components/shared/InfoHeader/InfoHeader";
import SelectTemplate from "pages/EditCard/SelectTemplate/SelectTemplate";
import EditCardModal from "pages/EditCard/EditCardModal/EditCardModal";
import { blankCard } from "data/blankCard";
import { useLocalStorage } from "hooks/useLocalStorage";

const EditCard = (props) => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [cardOption, setCardOption] = useState(0);
  const [ethereumCount, setEthereumCount] = useState(0.02);
  const [nameModal, setNameModal] = useState(false);
  const [username, setUserName] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  //refs
  const uploadedImage = createRef(null);
  const imageUploader = useRef(null);

  //edit eth number
  const [editEth, setEditEth] = useState(false);
  const [ethNumber, setEthNumber] = useState(0.02);

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
      setCardOption(0);
    }
  };

  //handlers for increasing or decreasing ethereum
  const addToEthereum = () => {
    if (ethereumCount < 0) {
      setEthereumCount(0.02);
    } else {
      setEthereumCount((c) => c + 0.02);
    }
  };

  const decreaseEthereum = () => {
    if (ethereumCount <= 0.02) {
      setEthereumCount(0.02);
    } else {
      setEthereumCount((c) => c - 0.02);
    }
  };

  const handleEditing = ({ target }) => {
    const count = target.value;
    const newCount = parseFloat(count);
    setEthNumber(newCount);
  };

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
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
          ref={uploadedImage}
          image={image}
          color={color}
          ethereumCount={ethereumCount}
          setEditEth={setEditEth}
          name={name}
          editModalBg={editModalBg}
        />

        <div
          className="add-details_container"
          style={{ borderWidth: 2, borderColor: color, borderStyle: "solid" }}
        >
          <button
            className="add-user-image_btn"
            onClick={() => imageUploader.current.click()}
          >
            +
          </button>
          <input
            type="file"
            accept="image/*"
            multiple={false}
            className="choose_image"
            ref={imageUploader}
            onChange={handleImageUpload}
          />

          <button
            className="add-user-name_btn"
            onClick={() => {
              setNameModal(true);
            }}
          >
            <FaFeatherAlt />
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
                    setCardOption(index);
                  }}
                ></span>
              );
            })}
          </div>

          <div className="eth-counts">
            <div className="eth-count_btns">
              <button onClick={decreaseEthereum}>-</button>
              <span>0.02</span>
              <button onClick={addToEthereum}>+</button>
            </div>
          </div>
          <div
            className={`edit-eth_modal ${editEth ? "open" : ""}`}
            style={{ border: `1px solid ${color}` }}
          >
            <form className="content">
              <input
                type="number"
                id="ethnumber"
                step="0.02"
                value={Number.isNaN(ethNumber) ? "" : ethNumber}
                onChange={handleEditing}
              />
              <button
                style={{
                  backgroundColor: color,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setEthereumCount(ethNumber);
                  setEditEth(false);
                }}
              >
                Done
              </button>
            </form>
          </div>
        </div>

        <button
          className="done-btn"
          onClick={() => {
            setIsEdited(true);
          }}
          style={{ backgroundColor: editButtonColor }}
        >
          DONE
        </button>
      </div>
      {isEdited ? (
        <Mint
          edited={isEdited}
          setIsEdited={setIsEdited}
          mintButtonColor={editButtonColor}
          mintModalBg={editModalBg}
          selectedTemplate={selectedTemplate}
          ethereumCount={ethereumCount}
        />
      ) : null}
    </div>
  );
};

export default EditCard;
