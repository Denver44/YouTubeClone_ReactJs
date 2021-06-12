import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__content">
        <div className="searchPage__filter">
          <TuneOutlinedIcon fontSize="small" />
          <h2>Filter</h2>
        </div>
        <hr className="searchPage__divider" />
        <ChannelRow
          image="//yt3.ggpht.com/ytc/AAUvwniko_vUtK65vqkbJ-1Gb7ABRLhS62L3kRxnyW_hxA=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="THENX"
          subs="6.56M"
          noOfVideos="283"
          desc="ELITE FITNESS TRAINING BY CHRIS HERIA."
          verified="yes"
        />
        <hr className="searchPage__divider" />
        <h4 className="searhPage__Queryname">Latest from Thenx</h4>

        <VideoRow
          channelName="THENX"
          Channellogo="https://yt3.ggpht.com/ytc/AAUvwniko_vUtK65vqkbJ-1Gb7ABRLhS62L3kRxnyW_hxA=s68-c-k-c0x00ffffff-no-rj"
          views="100k views"
          timeStamp="2 months ago"
          title="NEVER DO These 3 Things Before A Workout | DO THIS Instead"
          image="https://i.ytimg.com/vi/cetm4Fqqhcg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaki54Wumw_jncjDdbdn9N9OCffg "
          desc={
            "Join Stefan Heria as he reveals the 3 things you should NEVER DO before a workout and what you should do instead. Follow along with this Full Body Beginner Workout by using the Thenx App, where you'll find everything to get in the best shape of your life!"
          }
        />

        <VideoRow
          channelName="THENX"
          Channellogo="https://yt3.ggpht.com/ytc/AAUvwniko_vUtK65vqkbJ-1Gb7ABRLhS62L3kRxnyW_hxA=s68-c-k-c0x00ffffff-no-rj"
          views="100k views"
          timeStamp="2 months ago"
          title="Perfect Abs And Obliques Workout For Beginners"
          image="https://i.ytimg.com/vi/ZoPVRr2oQUo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFaMZPzeunRoUFEDXLidvyFUZtTA"
          desc={
            "Follow along with Chris Heria to this Perfect Abs And Obliques Workout For Beginners. With no equipment needed, you can do this workout anywhere! "
          }
        />
        <VideoRow
          title="6 PACK ABS For Beginners You Can Do A
          nywhere"
          channelName="THENX"
          image="https://i.ytimg.com/vi/3p8EBPVZ2Iw/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBhVEwRI1DxsD7csc9IMbzmw0FwAg"
          Channellogo="https://yt3.ggpht.com/ytc/AAUvwniko_vUtK65vqkbJ-1Gb7ABRLhS62L3kRxnyW_hxA=s68-c-k-c0x00ffffff-no-rj"
          timeStamp="2 years ago"
          views="72M views"
          desc={
            "Follow along as Chris Heria shows you a 5 minute ab workout you can do every day at any time and any place.  NO GYM NO PROBLEM"
          }
        />

        <VideoRow
          title="Home Workout For Beginners | Dumbbells"
          image="https://i.ytimg.com/vi/2fCKd-BQOhw/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBpVdHN6G0es_dz4-8d1CTrPBydtA"
          channelName="THENX"
          views="145K views"
          Channellogo="https://yt3.ggpht.com/ytc/AAUvwniko_vUtK65vqkbJ-1Gb7ABRLhS62L3kRxnyW_hxA=s68-c-k-c0x00ffffff-no-rj"
          timeStamp="5 days ago"
          desc={
            "Follow along with Chris Heria to this Perfect Abs And Obliques Workout For Beginners. With no equipment needed, you can do this workout anywhere! "
          }
        />
      </div>
    </div>
  );
}

export default SearchPage;
