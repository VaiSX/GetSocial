import React from "react";
import "./leftBar.scss";
import User from "../../assets/user.png";
import Friends from "../../assets/friends.png";
import Groups from "../../assets/crowd.png";
import Market from "../../assets/retailer.png";
import Watch from "../../assets/watching-tv.png";
import Memories from "../../assets/alarm-clock.png";
import Event from "../../assets/planner.png";
import Gaming from "../../assets/game-controller.png";
import Gallery from "../../assets/gallery.png";
import Video from "../../assets/video.png";
import Messages from "../../assets/comments.png";
import Fund from "../../assets/fund.jpg";
import Tut from "../../assets/tutorial.png";
import Courses from "../../assets/courses.png";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={User} alt="user"></img>
            <span>Sheeeesh</span>
          </div>
          <div className="item">
            <img src={Friends} alt="friends"></img>
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="groups"></img>
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt=""></img>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt=""></img>
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt=""></img>
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcuts</span>
          <div className="item">
            <img src={Event} alt="friends"></img>
            <span>Event</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="groups"></img>
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt=""></img>
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Video} alt=""></img>
            <span>Video</span>
          </div>
          <div className="item">
            <img src={Messages} alt=""></img>
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="item">
            <img src={Fund} alt="friends"></img>
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tut} alt="friends"></img>
            <span>Tutorial</span>
          </div>
          <div className="item">
            <img src={Courses} alt="friends"></img>
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
