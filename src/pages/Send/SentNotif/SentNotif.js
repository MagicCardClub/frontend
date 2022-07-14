import React from "react";
import "./SentNotif.scss";

const SentNotif = (props) => {
  const { sentNotif } = props;
  return (
    <div className="sent-notif">
      <div className="sent-circle" style={{ backgroundColor: sentNotif }}></div>
    </div>
  );
};

export default SentNotif;
