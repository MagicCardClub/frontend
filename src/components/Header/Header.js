import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import "./Header.scss";
import logo from "assets/images/header/mc_logo.png";

const Header = (props) => {
  const { otherProps, headerProps } = props;
  const { headerButtonColor, headerIconBg, headerIconColor, headerBg } =
    headerProps;

  // const { handleConnected, isConnected } = otherProps;
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <header>
      <div
        className="navs"
        style={{
          backgroundColor: headerBg,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="logo">
          <img src={logo} alt="logo" />
          <div>
            <span>Magic</span>
            <span>Card</span>
          </div>
        </div>

        <ul className="site_links">
          <li>
            <a href="#link">About</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#comms">Community</a>
          </li>
        </ul>
        <ul className="sm_links">
          <li>
            <a
              href="https://twitter.com/MagicCardClub"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: headerIconBg, color: headerIconColor }}
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/6ktZrzfQR6"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: headerIconBg, color: headerIconColor }}
            >
              <FaDiscord />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/xp9q6CkkCjQxMjdi"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: headerIconBg, color: headerIconColor }}
            >
              <FaTelegramPlane />
            </a>
          </li>
        </ul>
        <button
          className="connect-btn"
          onClick={() => {
            if (!address) connect();
            else disconnect();
          }}
          style={{ backgroundColor: headerButtonColor }}
        >
          {isConnected ? address : "Connect wallet"}
        </button>
      </div>
    </header>
  );
};

export default Header;
