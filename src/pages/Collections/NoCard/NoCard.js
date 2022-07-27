import React from "react";
import { Link } from "react-router-dom";

import "./NoCard.scss";
import InfoHeader from "components/shared/InfoHeader/InfoHeader";

const NoCard = (props) => {
  const { mintButtonColor } = props;
  return (
    <section className="no-card">
      <InfoHeader />

      <div className="no-card_display">
        <div className="no-card_image"></div>
        <div className="no-card_texts">
          <span>OMG!</span>
          <span>You have no existing Gift Card in your collection.</span>
          <span>Let's change that!</span>
        </div>
        <Link to="/edit">
          <button
            className="mint_nocard"
            style={{ backgroundColor: mintButtonColor }}
          >
            MINT
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NoCard;
