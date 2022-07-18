import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Mint.scss";
import { mintFrames } from "data/frames";

const Mint = (props) => {
  const {
    mintButtonColor,
    mintModalBg,
    edited,
    setIsEdited,
    selectedTemplate,
    ethereumCount,
  } = props;

  const [cardCount, setCardCount] = useState(1);
  const [ethAmount, setEthAmount] = useState(ethereumCount);
  const [isMinted, setIsMinted] = useState(false);

  useEffect(() => {
    setEthAmount((ethAmount) => {
      const newAmount = cardCount * ethAmount;
      return newAmount;
    });
  }, [cardCount]);

  const decreaseCard = () => {
    cardCount === 1 ? setCardCount(1) : setCardCount((c) => c - 1);
  };

  const handleMinted = () => {
    if (!isMinted) {
      setIsMinted(true);
    }
    return;
  };

  const { id, frame, text } = mintFrames[selectedTemplate];

  return (
    <div className={`mint ${edited ? "open" : ""}`}>
      <div
        className="mint-action-container"
        style={{ backgroundColor: mintModalBg }}
      >
        <div className="edited-card_box">
          <img src={frame} alt={text} key={id} className="frame" />
        </div>
        <div className="text">Enter Number of Gift Cards to Mint.</div>

        <div className="amount-of-cards-btn">
          <button onClick={decreaseCard}>-</button>
          <span>{cardCount}</span>
          <button
            onClick={() => {
              setCardCount((c) => c + 1);
            }}
          >
            +
          </button>
        </div>

        <div className="amount-of-eth">
          {ethAmount < 0.02 ? 0.02 : ethAmount} ETH
        </div>
        <span className="gas-fee-notice">(Excluding gas fees)</span>

        <Link to={isMinted ? "/send" : ""} className="send-btn-box">
          <button
            className="mint-btn"
            style={{ backgroundColor: mintButtonColor }}
            onClick={handleMinted}
          >
            MINT
          </button>
        </Link>

        <button
          className="close-btn"
          onClick={() => {
            setIsEdited(false);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Mint;
