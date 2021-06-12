import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Logo from "../../images/youtube.png";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [inputSearch, setinputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link to="/YoutubeClone-React">
          <img
            className="header__logo"
            style={{ height: "18px", objectFit: "contain", marginLeft: "10px" }}
            src={Logo}
            alt="youtube__icon"
          />
        </Link>
      </div>
      <div className="header__search">
        <div className="header__input">
          <input
            placeholder="Search THENX"
            type="text"
            onChange={(e) => setinputSearch(e.target.value)}
            value={inputSearch}
          />
          <Link
            to={`/search/${inputSearch}`}
            style={{ textDecoration: "none", margin: "0px", padding: "0px" }}
          >
            <SearchIcon className="header__searchButton" />
          </Link>
        </div>
        <MicOutlinedIcon fontSize="small" className="header__searchMic" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="icons" />
        <AppsIcon className="icons" />
        <NotificationsIcon className="icons" />
        <Avatar
          src="https://i.pinimg.com/originals/35/93/dc/3593dcffea2b167b3c89e250667a939b.jpg"
          className="icons"
          style={{ height: "32px", width: "32px" }}
        />
      </div>
    </div>
  );
}

export default Header;
