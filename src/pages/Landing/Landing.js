import React from "react";
import "./Landing.scss";
import heroImg from "../../assets/images/hero/hero_image.png";

const Landing = () => {
  return (
    <main>
      {/* different patches of colors on page */}
      {/* <div className="color_one"></div>
      <div className="color_two"></div>
      <div className="color_three"></div> */}
      <div className="hero">
        <div className="hero_texts">
          <div className="first">
            <span>MINT</span>
            <br />
            <span>NFT</span>
            <br />
            <span>GIFT CARDS</span>
          </div>
          <div className="second">
            <span>SEND AND CLAIM</span>
            <br />
            <span>GIFT CARDS AND TOKENS</span>
          </div>
          <div className="third">
            <span>From family, friends, co-workers</span>
            <br />
            <span>&#38; acquaintances</span>
          </div>
        </div>

        <div className="hero_image">
          <img src={heroImg} alt="heroimg" />
          <div className="img_shadow"></div>
        </div>
      </div>

      <div className="mint-claim_btn">
        <button>MINT</button>
        <button>CLAIM</button>
      </div>

      <div className="newsletter">
        <div className="text">
          Get the latest update on upcoming gift card <br /> types for your
          family, friends and loved ones.
        </div>
        <form action="">
          <input type="text" placeholder="enter email" />
          <br />
          <button>Subscribe to Newletter</button>
        </form>
      </div>
    </main>
  );
};

export default Landing;
