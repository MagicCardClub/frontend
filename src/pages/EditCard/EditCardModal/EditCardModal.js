import React, { useState, useEffect } from "react";
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
    editRefs,
    showGreet,
    greeting,
    storedUserImage,
  } = props;
  const { uploadedImage, convertedCard } = editRefs;

  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("storedUserImage"));
      if (data) {
        setUserImage(data);
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [userImage]);

  return (
    <div
      className="blank_card"
      style={{ backgroundColor: "transparent" }}
      ref={convertedCard}
    >
      <img src={image} alt={color} className="blank_card-image" />

      <div className="user-name_image" style={{ backgroundColor: color }}>
        <img
          src={storedUserImage ? storedUserImage : defaultImage}
          alt="user"
          ref={uploadedImage}
        />
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
