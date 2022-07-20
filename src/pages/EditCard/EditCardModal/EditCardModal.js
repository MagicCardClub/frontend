import React from "react";
import { FaEthereum } from "react-icons/fa";

import "./EditCardModal.scss";
import defaultImage from "assets/images/defaultImage.webp";

const EditCardModal = (props) => {
  const {
    image,
    color,
    ethereumCount,
    setEditEth,
    name,
    editModalBg,
    editRefs,
    showGreet,
    greeting,
  } = props;
  const { uploadedImage, convertedCard } = editRefs;

  return (
    <div
      className="blank_card"
      style={{ backgroundColor: editModalBg }}
      ref={convertedCard}
    >
      <img src={image} alt={color} className="blank_card-image" />

      <div className="user-name_image" style={{ backgroundColor: color }}>
        <img src={defaultImage} alt="user" ref={uploadedImage} />
        <div className="name">{name}</div>
      </div>
      <span className={`greeting ${showGreet ? "show" : ""}`}>{greeting}</span>
      <div
        className="eth-number_container"
        onClick={() => {
          setEditEth(true);
        }}
      >
        <div className="eth-logo" style={{ backgroundColor: color }}>
          <FaEthereum />
        </div>
        <span>{ethereumCount.toFixed(2)} eth</span>
      </div>
    </div>
  );
};

export default EditCardModal;

//
