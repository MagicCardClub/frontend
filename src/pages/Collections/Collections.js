import React, { useState } from "react";
import { FaFilter, FaBell } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

import "./Collections.scss";
import InfoHeader from "components/shared/InfoHeader/InfoHeader";
import MintedCards from "./MintedCards/MintedCards";

const filterOptions = ["Date", "Name", "Template", "Favorite"];

const Collections = (props) => {
  const [filterOpen, setFilterOpen] = useState(false);
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
            onClick={() => {
              setFilterOpen((prev) => !prev);
            }}
          />

          <FaBell className="icon bell" style={{ color: iconButtonColor }} />

          <div className={`filter-options ${filterOpen ? "open" : ""}`}>
            <div className="header">Sort by</div>
            <div className="options">
              {filterOptions.map((option) => {
                return <span>{option}</span>;
              })}
            </div>
          </div>
        </div>

        <div
          className={`collections_minted-cards ${filterOpen ? "blur" : ""}`}
          style={{ backgroundColor: collectionModalBg }}
        >
          <MintedCards />
        </div>
      </div>
    </section>
  );
};

export default Collections;
