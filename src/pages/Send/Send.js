import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

import "./Send.scss";
import InfoHeader from "components/shared/InfoHeader/InfoHeader";
import SentNotif from "./SentNotif/SentNotif";
import { sendFrames } from "data/frames";

const Send = (props) => {
  const [isSent, setIsSent] = useState(false);
  const { sendButtonColor, sendModalBg, unpackColor, sendFrame } = props;

  if (isSent) return <SentNotif circleColor={unpackColor} />;

  const { id, frame, text } = sendFrames[sendFrame];

  return (
    <div className="send">
      <InfoHeader />

      <div className="send-action-container">
        <div
          className="minted-card-modal"
          style={{ backgroundColor: sendModalBg }}
        >
          <img src={frame} alt={text} className="minted-card-box" key={id} />
          {/* <div className="minted-card-box"> */}
          {/* <img src={mintedcard} alt="mintedcard" /> */}
          {/* </div> */}
        </div>

        <form action="" className="send-form">
          <input
            type="text"
            placeholder="enter wallet address"
            style={{
              borderColor: unpackColor,
            }}
          />

          <button  onClick={() => {
            setIsSent(true);
          }} style={{ backgroundColor: sendButtonColor }}>SEND</button>
        </form>
        <button
          className="unpack_send"
          style={{
            borderColor: unpackColor,
            color: unpackColor,
          }}
         
        >
          Unpack Your Gift Collection <FiExternalLink />
        </button>
      </div>
    </div>
  );
};

export default Send;
