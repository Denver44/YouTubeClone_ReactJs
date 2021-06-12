import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({
  image,
  title,
  ChannelName,
  Channellogo,
  views,
  timeStamp,
}) {
  return (
    <div className="videoCard">
      <div
        className="videoCard__thumbNail"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="videoCard__info">
        <Avatar
          src={Channellogo}
          alt={Channellogo}
          className="videoCard__avatar"
        />
        <div className="videoCard__detail">
          <p className="videoCard__detailtitle">{title}</p>
          <div className="videocard__smalldetial">
            <p>{ChannelName} </p>
            <p>
              {views} • {timeStamp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
