import React, { useState, useEffect } from "react";
import "./Mint.scss";
import InfoHeader from "components/shared/InfoHeader/InfoHeader";
import editedcard from "assets/images/editedimage/editedcard.png";

const Mint = () => {
  const [cardCount, setCardCount] = useState(1);
  const [ethAmount, setEthAmount] = useState(0.025);

  const decreaseCard = () => {
    cardCount === 1 ? setCardCount(1) : setCardCount(cardCount - 1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEthAmount(() => {
        let newAmount = cardCount * 0.025;
        return newAmount.toFixed(3);
      });
    });

    return () => {
      clearTimeout(timeout);
    };
  }, [cardCount]);

  return (
    <div className="mint">
      <InfoHeader />
      <div className="mint-action-container">
        <div className="edited-card_box">
          <img src={editedcard} alt="editedcard" />
        </div>
        <div className="text">Enter Number of Gift Cards to Mint.</div>
        <div className="amount-of-cards-btn">
          <button onClick={decreaseCard}>-</button>
          <span>{cardCount}</span>
          <button
            onClick={() => {
              setCardCount(cardCount + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="amount-of-eth">
          {ethAmount < 0.025 ? 0.025 : ethAmount} ETH
        </div>
        <span className="gas-fee-notice">(Excluding gas fees)</span>
        <button className="mint-btn">MINT</button>
        <div className="close-btn">X</div>
      </div>
    </div>
  );
};

export default Mint;
