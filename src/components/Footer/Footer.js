import React from "react";
import "./Footer.scss";
import giftImage from "../../assets/images/footer/three_gifts.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <nav>
        <div className="site_nav">
          <a href="#link">Home</a>

          <a href="#link">Community</a>

          <a href="#link">Disclaimer</a>

          <a href="#link">About</a>

          <a href="#link">Feedback</a>

          <a href="#link">Privacy Policy</a>

          <a href="#link">Roadmap</a>

          <a href="#link">Terms of Service</a>
        </div>

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
      </nav>

      <div className="gift_img">
        <img src={giftImage} alt="gifts" />
      </div>

      <div className="copyright">
        <span>&copy;</span>
        <div className="magic-card">
          <span>Magic</span>
          <span>Card</span>
        </div>
        <span>{currentYear}</span>
      </div>
    </footer>
  );
};

export default Footer;
