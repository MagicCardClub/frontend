import React from "react";
import { ImCheckmark } from "react-icons/im";
import "./SentNotif.scss";

const SentNotif = (props) => {
  const { circleColor } = props;
  return (
    <div className="sent-notif">
      <div className="sent-circle" style={{ backgroundColor: circleColor }}>
        <ImCheckmark className="mark-icon" />
        <div className="mail-icon"></div>
      </div>
      <div className="sent-message" style={{ color: circleColor }}>
        Gift Card Sent
      </div>
    </div>
  );
};

export default SentNotif;
