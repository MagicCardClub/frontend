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
  } = props;

  const [cardCount, setCardCount] = useState(1);
  const [mintAmount, setMintAmount] = useState(0.025);
  const [isMinted, setIsMinted] = useState(false);

  //Functions to increase and decrease amount of eth to mint
  const increaseMintCount = () => {
    setCardCount(cardCount + 1);
  };

  const decreaseMintCount = () => {
    if (cardCount === 1) {
      setCardCount(1);
    } else {
      setCardCount(cardCount - 1);
    }
  };
  //side effect to increase mint amount
  useEffect(() => {
    setMintAmount(0.025 * cardCount);
  }, [cardCount]);

  // function to check if mint button has been clicked
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
          <button onClick={decreaseMintCount}>-</button>
          <span>{cardCount}</span>
          <button
            onClick={() => {
              increaseMintCount();
            }}
          >
            +
          </button>
        </div>

        <div className="amount-of-eth">
          {mintAmount < 0.025 ? 0.025 : mintAmount.toFixed(3)} ETH
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
