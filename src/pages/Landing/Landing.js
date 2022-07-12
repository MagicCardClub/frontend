import React from "react";
import "./Landing.scss";
import Carousel from "components/Carousel/Carousel";
import { BiLinkExternal } from "react-icons/bi";

const Landing = (props) => {
  const { carousel, changeBackground, textColorone, textColortwo, footerBg } =
    props;

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
        <button style={{ backgroundColor: textColortwo, color: "white" }}>
          MINT
        </button>
        <button
          style={{
            borderColor: textColortwo,
            color: textColortwo,
            borderWidth: 4,
          }}
        >
          CLAIM
        </button>
      </div>

      <div
        className="unpack"
        style={{
          backgroundColor: footerBg,
          boxShadow: `0px 0px 30px 35px ${footerBg}`,
        }}
      >
        Unpack Your Gift Collection <BiLinkExternal />
      </div>
    </main>
  );
};
export default Landing;
