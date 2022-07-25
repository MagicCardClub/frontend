import React, { useEffect } from "react";
import { ImCheckmark } from "react-icons/im";
import "./SentNotif.scss";

const SentNotif = (props) => {
  const { circleColor, sendModalBg, isSent, setIsSent } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.clear();
      setIsSent(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [setIsSent]);

  return (
    <div className="sent-notif">
      <div
        className={`notif-container ${isSent ? "sent" : ""}`}
        style={{ backgroundColor: sendModalBg }}
      >
        <div className="sent-circle" style={{ backgroundColor: circleColor }}>
          <ImCheckmark className="mark-icon" />
          <div className="mail-icon"></div>
        </div>
        <div className="sent-message" style={{ color: circleColor }}>
          Gift Card Sent
        </div>
      </div>
    </div>
  );
};

export default SentNotif;
