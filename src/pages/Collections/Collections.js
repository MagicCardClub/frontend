import React from "react";
import { FaFilter, FaBell } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

import "./Collections.scss";
import InfoHeader from "components/shared/InfoHeader/InfoHeader";
import MintedCards from "./MintedCards/MintedCards";

const Collections = (props) => {
  const { iconButtonColor, collectionModalBg } = props;
  return (
    <section className="collections">
      <InfoHeader />

      <div className="collections-container">
        <div className="search-container">
          <div
            className="search-box"
            style={{ backgroundColor: collectionModalBg }}
          >
            <input type="text" />
            <BsSearch className="icon search" />
            <MdOutlineCancel className="icon cancel" />
          </div>
          <FaFilter
            className="icon filter"
            style={{ color: iconButtonColor }}
          />
          <FaBell className="icon bell" style={{ color: iconButtonColor }} />
        </div>

        <div
          className="collections_minted-cards"
          style={{ backgroundColor: collectionModalBg }}
        >
          <MintedCards />
        </div>
      </div>
    </section>
  );
};

export default Collections;
