import React, { useState, useRef, useCallback, useEffect } from "react";
import { toPng } from "html-to-image";
import { FaFeatherAlt } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import USDCIcon from "assets/icons/usdc-coin-icon.svg";

import "./EditCard.scss";
import Mint from "pages/EditCard/Mint/Mint";
import InfoHeader from "components/shared/InfoHeader/InfoHeader";
import SelectTemplate from "pages/EditCard/SelectTemplate/SelectTemplate";
import EditCardModal from "pages/EditCard/EditCardModal/EditCardModal";
import { blankCard } from "data/blankCard";
import { greetings } from "data/greetings";
import { useLocalStorage } from "hooks/useLocalStorage";

const EditCard = (props) => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [cardOption, setCardOption] = useState(0);
  const [ethereumCount, setEthereumCount] = useState(10);
  const [nameModal, setNameModal] = useState(false);
  const [username, setUserName] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const [showGreet, setShowGreet] = useState(false);

  //refs
  const uploadedImage = useRef(null);
  const convertedCard = useRef(null);
  const cardToMint = useRef(null);
  const imageUploader = useRef(null);

  //edit eth number
  const [editEth, setEditEth] = useState(false);
  const [ethNumber, setEthNumber] = useState(10);

  //props
  const { changeBackground, editButtonColor, editModalBg, mintModalBg } = props;

  //saves username to local storage
  const [name, setName] = useLocalStorage("user's name", "");
  const [storedEthValue, setStoredEthValue] = useLocalStorage("ethNumber", "");
  const [storedUserImage, setStoredUserImage] = useLocalStorage(
    "userimage",
    ""
  );
  const [binaryData, setBinaryData] = useLocalStorage("binaryData", "");

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
      setEthereumCount(10);
    } else {
      setEthereumCount((c) => c + 10);
    }
  };

  const decreaseEthereum = () => {
    if (ethereumCount <= 10) {
      setEthereumCount(10);
    } else {
      setEthereumCount((c) => c - 10);
    }
  };

  const handleEditing = ({ target }) => {
    const count = target.value;
    const newCount = parseFloat(count);
    setEthNumber(newCount);
  };

  useEffect(() => {
    setStoredEthValue(ethereumCount);
  }, [ethereumCount, setStoredEthValue]);

  //user uploading image
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setStoredUserImage(e.target.result);
        console.log(storedUserImage);
      };
      reader.readAsDataURL(file);
    }
  };

  //converting edited card to image
  const onConvertCard = useCallback(() => {
    if (convertedCard.current === null) {
      return;
    }
    //display converted card
    setIsEdited(true);
    setShowGreet(true);
    setBinaryData(null);

    //delay conversion
    setTimeout(() => {
      toPng(convertedCard.current, { cacheBust: true })
        .then((dataUrl) => {
          setBinaryData(dataUrl);
        })
        .then(() => {
          console.log(binaryData);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  }, [convertedCard, binaryData, setBinaryData]);

  const cards = blankCard[selectedTemplate];

  const { id, image, color } = cards.options[cardOption];
  const { greeting } = greetings[selectedTemplate];

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
        className={`edit-card-modal_container ${isEdited ? "blur" : ""}`}
        style={{ backgroundColor: mintModalBg }}
      >
        <EditCardModal
          key={id}
          editRefs={{ uploadedImage, convertedCard }}
          showGreet={showGreet}
          image={image}
          color={color}
          ethereumCount={ethereumCount}
          setEditEth={setEditEth}
          name={name}
          greeting={greeting}
          editModalBg={editModalBg}
          storedUserImage={storedUserImage}
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

          {/* <button
            className="add-user-name_btn"
            onClick={() => {
              setNameModal(true);
            }}
          >
            <FaFeatherAlt />
          </button> */}

          {/* <div
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
          </div> */}

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
              <span>10</span>
              <button onClick={addToEthereum}>+</button>
            </div>
          </div>
          <div
            className="eth-number_container"
            style={{ border: `2px solid ${color}` }}
          >
            <div
              className="eth-logo"
              style={{
                backgroundColor: color,
                borderRight: `2px solid ${color}`,
              }}
            >
              <img src={USDCIcon} alt={color} className="blank_card-image" />
            </div>
            <span
              data-for="token-amount"
              data-tip={`${ethereumCount.toFixed(2)} USDC`}
              onClick={() => {
                setEditEth(true);
              }}
            >
              {ethereumCount.toFixed(2)} USDC
            </span>
            <ReactTooltip id="token-amount" />
          </div>
          <div
            className={`edit-eth_modal ${editEth ? "open" : ""}`}
            style={{ border: `1px solid ${color}` }}
          >
            <form className="content">
              <input
                type="number"
                id="ethnumber"
                step="10"
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
          onClick={(e) => {
            e.preventDefault();
            onConvertCard();
          }}
          style={{ backgroundColor: editButtonColor }}
        >
          DONE
        </button>
      </div>
      {isEdited ? (
        <Mint
          edited={isEdited}
          ref={cardToMint}
          binaryData={binaryData}
          setIsEdited={setIsEdited}
          setShowGreet={setShowGreet}
          mintButtonColor={editButtonColor}
          mintModalBg={mintModalBg}
          selectedTemplate={selectedTemplate}
          ethereumCount={ethereumCount}
          storedEthValue={storedEthValue}
          color={color}
        />
      ) : null}
    </div>
  );
};
export default EditCard;
