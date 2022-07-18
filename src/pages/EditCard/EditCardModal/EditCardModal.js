import React, { forwardRef } from "react";
import { FaEthereum } from "react-icons/fa";

import "./EditCardModal.scss";
import defaultImage from "assets/images/defaultImage.webp";

const EditCardModal = forwardRef((props, uploadedImage) => {
  const { image, color, ethereumCount, setEditEth, name, editModalBg } = props;

  return (
    <div className="blank_card" style={{ backgroundColor: editModalBg }}>
      <img src={image} alt={color} className="blank_card-image" />

      <div className="user-name_image" style={{ backgroundColor: color }}>
        <img src={defaultImage} alt="user" ref={uploadedImage} />
        <div className="name">{name}</div>
      </div>

      <div
        className="eth-number_container"
        onClick={() => {
          setEditEth(true);
        }}
      >
        <div className="eth-logo" style={{ backgroundColor: color }}>
          <FaEthereum />
        </div>
        <span>{ethereumCount}</span>
      </div>
    </div>
  );
});

export default EditCardModal;

//
