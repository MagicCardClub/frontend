import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";

import "./MintedCards.scss";

const MintedCards = (props) => {
  const { collections } = props;

  return (
    <section className="minted-cards">
      {collections.map((card) => {
        const { id, image } = card;
        return (
          <div className="card-container" key={id}>
            <div className="favorite">
              <AiFillHeart className="icon heart" />
              <FaCalendarAlt className="icon calendar" />
            </div>
            <img src={image} alt="card" className="card-image" />
            <div className="send-claim">
              <button>SEND</button>
              <span>0.095</span>
              <button>CLAIM</button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MintedCards;
