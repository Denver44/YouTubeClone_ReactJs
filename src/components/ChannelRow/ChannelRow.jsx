import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Button from "@material-ui/core/Button";

function ChannelRow({ image, channel, subs, noOfVideos, desc, verified }) {
  return (
    <div className="channelRow">
      <div className="channelRow__top">
        <Avatar className="channelRow__logo" src={image} alt={channel} />
      </div>
      <div className="channelRow__center">
        <div className="channelRow__heading">
          <div className="channelRow__channelName">{channel}</div>
          {verified && (
            <CheckCircleOutlineIcon className="channelRow__verified" />
          )}
        </div>
        <div className="channelRow__info">
          <p>
            {subs} subscribers • {noOfVideos} videos
          </p>
        </div>
        <div className="channelRow__desc">
          <p>{desc}</p>
        </div>
      </div>

      <div className="channelRow__last">
        <Button variant="contained" className="channelRow__button">
          SUBSCRIBE
        </Button>
      </div>
    </div>
  );
}

export default ChannelRow;
