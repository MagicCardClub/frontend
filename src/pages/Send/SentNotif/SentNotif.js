import React from "react";
import "./SentNotif.scss";

const SentNotif = (props) => {
  const { circleColor } = props;
  return (
    <div className="sent-notif">
      <div
        className="sent-circle"
        style={{ backgroundColor: circleColor }}
      ></div>
    </div>
  );
};

export default SentNotif;
