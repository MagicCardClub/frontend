import React from "react";
import "./InfoHeader.scss";

import balloonone from "assets/images/balloons/balloon-one.png";
import balloontwo from "assets/images/balloons/balloon-two.png";
import shopcart from "assets/images/cart-giftbox/shopping-cart.png";
import giftbox from "assets/images/cart-giftbox/gift-box.png";

const InfoHeader = () => {
  return (
    <div className="info-header">
      <div className="box-1"></div>
      <div className="box-2">
        <span>Mint price per NFT Gift Card = 0.025 ETH</span>
        <img src={balloonone} alt="balloonone" className="balloon-one" />
        <img src={balloontwo} alt="balloontwo" className="balloon-two" />
        <img src={shopcart} alt="cart" className="shopcart" />
        <img src={giftbox} alt="giftbox" className="giftbox" />
      </div>
    </div>
  );
};

export default InfoHeader;
