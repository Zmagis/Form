import React from "react";
import { NavLink } from "react-router-dom";
import video from "../../images/network.mp4";

const Home = props => {
  return (
    <div className="home-screen">
      <div className="video-box">
        <video
          className="video"
          src={video}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        ></video>
      </div>

      <div className="overlay"></div>
      <div className="home-content">
        <h1>Deep/Random Questionary</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <NavLink className="start-button" to="/form">
          Let's start
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
