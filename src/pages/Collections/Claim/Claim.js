import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";

import "./Claim.scss";
import { collections } from "data/collections";

const Claim = (props) => {
  const { claimModalBg, claimButtonColor, setClaimOpen, claimOpen, cardIndex } =
    props;

  const { id, image } = collections[cardIndex];

  return (
    <section
      className={`claim ${claimOpen ? "open" : ""}`}
      style={{ backgroundColor: claimModalBg }}
    >
      <div className="claim-card_container">
        <div className="claim-card_box" key={id}>
          <img src={image} alt="card" />

          <div className="unclaimed">
            <span>UNCLAIMED</span>
            <span>0.095</span>
          </div>

          <div className="pending">
            <span>pending...</span>
            <AiFillHeart className="icon-heart" />
          </div>
        </div>
      </div>
      <div className="claim-eth_amount">
        <FaEthereum className="icon-eth" />
        <span>0.095</span>
      </div>
      <button
        className="claim-card"
        style={{ backgroundColor: claimButtonColor }}
        onClick={() => {
          setClaimOpen(false);
        }}
      >
        CLAIM
      </button>
    </section>
  );
};

export default Claim;
