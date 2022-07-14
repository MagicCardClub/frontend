import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

import "./Send.scss";
import InfoHeader from "components/shared/InfoHeader/InfoHeader";
import SentNotif from "./SentNotif/SentNotif";
import mintedcard from "assets/images/editedimage/editedcard.png";

const Send = (props) => {
  const [isSent, setIsSent] = useState(true);
  const { sendButtonColor, sendModalBg, unpackColor } = props;

  if (isSent) return <SentNotif sentNotif={unpackColor} />;

  return (
    <div className="send">
      <InfoHeader />

      <div className="send-action-container">
        <div
          className="minted-card-modal"
          style={{ backgroundColor: sendModalBg }}
        >
          <div className="minted-card-box">
            <img src={mintedcard} alt="mintedcard" />
          </div>
        </div>

        <form action="" className="send-form">
          <input type="text" placeholder="enter wallet address" />

          <button style={{ backgroundColor: sendButtonColor }}>SEND</button>
        </form>
        <button
          className="unpack_send"
          style={{
            borderColor: unpackColor,
            color: unpackColor,
          }}
          onClick={() => {
            setIsSent(true);
          }}
        >
          Unpack Your Gift Collection <FiExternalLink />
        </button>
      </div>
    </div>
  );
};

export default Send;
