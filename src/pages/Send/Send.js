import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Send.scss";
import InfoHeader from "components/shared/InfoHeader/InfoHeader";
import SentNotif from "./SentNotif/SentNotif";
import { sendFrames as frames } from "data/frames";

const Send = (props) => {
  const [sendFrames] = useState(frames);
  const [frameId, setFrameId] = useState(0);
  const [isSent, setIsSent] = useState(false);
  const [mintedImage, setMintedImage] = useState();
  const [ethNumber, setEthNumber] = useState();

  const { sendButtonColor, sendModalBg, unpackColor } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("binaryData"));
      const ethToSend = JSON.parse(localStorage.getItem("ethNumber"));
      const frameData = JSON.parse(localStorage.getItem("bgIndex"));

      if (data) {
        const frameIndex = parseInt(frameData);
        setFrameId(frameIndex);
        setMintedImage(data);
        setEthNumber(ethToSend);
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [mintedImage, ethNumber]);

  const handleSending = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  const { id, frame, text } = sendFrames[frameId];

  return (
    <div className="send">
      <InfoHeader />

      <div className={`send-action-container ${isSent ? "blur" : ""}`}>
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
            className="send-card-btn"
            onClick={handleSending}
            style={{ backgroundColor: sendButtonColor }}
          >
            SEND
          </button>
        </form>
        <Link to="/collections" className="link-unpack_send">
          {" "}
          <button
            className="unpack_send"
            style={{
              borderColor: unpackColor,
              color: unpackColor,
            }}
          >
            Unpack Your Gift Collection <FiExternalLink />
          </button>
        </Link>
      </div>

      {isSent ? (
        <SentNotif
          isSent={isSent}
          setIsSent={setIsSent}
          circleColor={unpackColor}
          sendModalBg={sendModalBg}
        />
      ) : null}
    </div>
  );
};

export default Send;
