import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { useAccount } from "wagmi";

import "./Landing.scss";
import Carousel from "pages/Landing/Carousel/Carousel";

const Landing = (props) => {
  const { carousel, changeBackground, textColorone, textColortwo, footerBg } =
    props;
  const { isConnected } = useAccount();

  return (
    <main>
      <div className="hero">
        <div className="hero_texts">
          <div className="first">
            <span style={{ color: textColorone }}>MINT</span>
            <br />
            <span style={{ color: textColortwo }}>NFT</span>
            <br />
            <span style={{ color: textColorone }}>GIFT CARDS</span>
          </div>
          <div className="second">
            <span style={{ color: textColortwo }}>SEND AND CLAIM</span>
            <br />
            <span style={{ color: textColortwo }}>GIFT CARDS AND TOKENS</span>
          </div>
          <div className="third">
            <span style={{ color: textColortwo }}>
              From family, friends, co-workers
            </span>
            <br />
            <span style={{ color: textColortwo }}>&#38; acquaintances</span>
          </div>
        </div>

        <Carousel
          carousel={carousel}
          changeBackground={changeBackground}
          textColorone={textColorone}
          textColortwo={textColortwo}
        />
      </div>

      <div className="mint-claim_btn">
        <Link to={isConnected ? "edit" : ""}>
          <button
            style={{
              backgroundColor: isConnected ? textColortwo : "#575757",
              color: "white",
            }}
          >
            MINT
          </button>
        </Link>
        <Link to="/">
          <button
            style={{
              backgroundColor: "inherit",
              borderColor: textColortwo,
              color: textColortwo,
              borderWidth: 4,
            }}
          >
            CLAIM
          </button>
        </Link>
      </div>

      <Link to="/collections" className="link-unpack_landing">
        <button
          className="unpack-btn"
          style={{
            backgroundColor: footerBg,
            boxShadow: `0px 0px 30px 35px ${footerBg}`,
          }}
        >
          Unpack Your Gift Collection <FiExternalLink />
        </button>
      </Link>
    </main>
  );
};
export default Landing;
