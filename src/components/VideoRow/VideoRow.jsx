import React from "react";
import "./VideoRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ClosedCaptionIcon from "@material-ui/icons/ClosedCaption";
function VideoRow({
  title,
  channelName,
  Channellogo,
  views,
  desc,
  image,
  timeStamp,
}) {
  return (
    <div className="videoRow">
      <img src={image} className="videoRow__thumbNail" />
      <div className="videoRow__text">
        <div className="videoRow__texttitle">{title}</div>
        <p>
          {views} • {timeStamp}
        </p>
        <div className="videoCard__channelDetail">
          <Avatar src={Channellogo} alt="icon" className="videoCard__avatar" />
          <p>{channelName}</p>
          <CheckCircleOutlineIcon className="videoCard__verified" />
        </div>
        <div className="videoCard__desc">
          <p>{desc.length > 100 ? desc.substr(0, 150) + "..." : desc}</p>
          <ClosedCaptionIcon className="videoCard__closedaption" />
        </div>
      </div>
    </div>
  );
}

export default VideoRow;
