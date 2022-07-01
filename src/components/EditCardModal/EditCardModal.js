import React, { useState, useEffect } from "react";
import "./EditCardModal.scss";
import { blankCard } from "../../data/blankCard";

const EditCardModal = ({ selectedTemplate }) => {
  const [cards, setCards] = useState(blankCard);
  const [index, setIndex] = useState(selectedTemplate);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleBlankIndex();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [index]);

  const handleBlankIndex = (selectedTemplate) => {
    if (selectedTemplate > cards.length) {
      setIndex(0);
    }
    console.log(index);
  };

  const { image, text } = cards[index];
  return (
    <div className="edit-card_modal">
      <img src={image} alt={text} />
    </div>
  );
};

export default EditCardModal;
