import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";

import "./Send.scss";
import InfoHeader from "components/shared/InfoHeader/InfoHeader";
import SentNotif from "./SentNotif/SentNotif";
import { sendFrames } from "data/frames";

const Send = (props) => {
  const [isSent, setIsSent] = useState(false);
  const [mintedImage, setMintedImage] = useState();
  const [ethNumber, setEthNumber] = useState();
  const { sendButtonColor, sendModalBg, unpackColor, sendFrame } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("binaryData"));
      const ethToSend = JSON.parse(localStorage.getItem("ethNumber"));
      if (data) {
        setMintedImage(data);
        setEthNumber(ethToSend);
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [mintedImage, ethNumber]);

  const handleSend = () => {
    localStorage.clear();
    setIsSent(true);
  };

  if (isSent) {
    localStorage.setItem("ethNumber", "");
    return <SentNotif circleColor={unpackColor} />;
  }

  const { id, frame, text } = sendFrames[sendFrame];

  return (
    <div className="send">
      <InfoHeader />

      <div className="send-action-container">
        <div
          className="minted-card-modal"
          style={{ backgroundColor: sendModalBg }}
        >
          <img src={frame} alt={text} className="minted-card-frame" key={id} />
          <img src={mintedImage} alt="mintedcard" className="minted-card" />
          <span style={{ color: sendButtonColor }}>MINT SUCCESSFUL</span>
        </div>

        <form action="" className="send-form">
          <input
            type="text"
            // value={ethNumber}
            placeholder="enter wallet address"
            style={{
              borderColor: unpackColor,
            }}
          />

          <button
            onClick={handleSend}
            style={{ backgroundColor: sendButtonColor }}
          >
            SEND
          </button>
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
