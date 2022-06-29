import React from "react";
import "./Header.scss";
import logo from "../../assets/images/hero/mc_logo.png";
// AiOutlineTwitter
// FaDiscord
// FaTelegramPlane

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        <div>
          <span>Magic</span>
          <span>Card</span>
        </div>
      </div>
      <ul className="site_links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Roadmap</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
      </ul>

      <ul className="sm_links">
        <li>
          <a href="link">tweet</a>
        </li>
        <li>
          <a href="link">discord</a>
        </li>
        <li>
          <a href="link">telegram</a>
        </li>
      </ul>

      <button>Connect wallet</button>
    </header>
  );
};

export default Header;
