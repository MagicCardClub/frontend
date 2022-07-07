import React from "react";
import "./Footer.scss";
import giftImage from "../../assets/images/footer/three_gifts.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = (props) => {
  const {
    footerBg,
    footerButtonColor,
    footerTextColor,
    footerIconBg,
    footerIconColor,
  } = props;

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: footerBg }}>
      <div className="newsletter">
        <div className="text" style={{ color: footerTextColor }}>
          Get the latest update on upcoming gift card <br /> types for your
          family, friends and loved ones.
        </div>
        <form action="">
          <input
            type="text"
            placeholder="enter email"
            style={{ borderColor: footerButtonColor }}
          />
          <br />
          <button
            style={{
              backgroundColor: footerButtonColor,
              color: "white",
            }}
          >
            Subscribe to Newletter
          </button>
        </form>
      </div>

      <nav className="footer-nav">
        <div className="site_nav" style={{ color: footerTextColor }}>
          <a href="#link" style={{ color: footerTextColor }}>
            Home
          </a>

          <a href="#link" style={{ color: footerTextColor }}>
            Community
          </a>

          <a href="#link" style={{ color: footerTextColor }}>
            Disclaimer
          </a>

          <a href="#link" style={{ color: footerTextColor }}>
            About
          </a>

          <a href="#link" style={{ color: footerTextColor }}>
            Feedback
          </a>

          <a href="#link" style={{ color: footerTextColor }}>
            Privacy Policy
          </a>

          <a href="#link" style={{ color: footerTextColor }}>
            Roadmap
          </a>

          <a href="#link" style={{ color: footerTextColor }}>
            Terms of Service
          </a>
        </div>

        <ul className="sm_links">
          <li>
            <a
              href="https://twitter.com/MagicCardClub"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: footerIconBg,
                color: footerIconColor,
              }}
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/6ktZrzfQR6"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: footerIconBg,
                color: footerIconColor,
              }}
            >
              <FaDiscord />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/xp9q6CkkCjQxMjdi"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: footerIconBg,
                color: footerIconColor,
              }}
            >
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
