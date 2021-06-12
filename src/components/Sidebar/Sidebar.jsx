import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import SidebarRow from "../SidebarRow/SidebarRow";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title={"Home"} select={"selected"} />
      <SidebarRow Icon={WhatshotIcon} title={"Trending"} />
      <SidebarRow Icon={SubscriptionsIcon} title={"Subscriptions"} />
      <SidebarRow Icon={YouTubeIcon} title={"Originals"} />
      <SidebarRow
        Icon={PlayCircleFilledWhiteOutlinedIcon}
        title={"YouTube Music"}
      />
      <hr className="sidebar__divider" />
      <SidebarRow Icon={LibraryAddIcon} title={"Library"} />
      <SidebarRow Icon={HistoryIcon} title={"History"} />
      <SidebarRow Icon={OndemandVideoIcon} title={"Your videos"} />
      <SidebarRow Icon={WatchLaterIcon} title={"Watch later"} />
      <SidebarRow Icon={ThumbUpIcon} title={"Liked Videos"} />
      <SidebarRow Icon={ExpandMoreIcon} title={"Show more"} />
      <hr className="sidebar__divider" />
    </div>
  );
}

export default Sidebar;
