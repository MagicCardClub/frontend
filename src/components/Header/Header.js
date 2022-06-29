import React from "react";
import "./Header.scss";
import logo from "../../assets/images/hero/mc_logo.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

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
          <a href="link">About</a>
        </li>
        <li>
          <a href="roadmap">Roadmap</a>
        </li>
        <li>
          <a href="comms">Community</a>
        </li>
      </ul>

      <ul className="sm_links">
        <li>
          <a href="link">
            <AiOutlineTwitter />
          </a>
        </li>
        <li>
          <a href="link">
            <FaDiscord />
          </a>
        </li>
        <li>
          <a href="link">
            <FaTelegramPlane />
          </a>
        </li>
      </ul>

      <button>Connect wallet</button>
    </header>
  );
};

export default Header;
