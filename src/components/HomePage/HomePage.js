import { React, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ReactPlayer from "react-player";
import avatarImage from "../../assets/Avatar.png";
import HeroSection from "../HeroSection/HeroSection";
import "./HomePage.css";

const HomePage = () => {
  const [playing, setPlaying] = useState(false);
  
  return (
    <div className="homeWrapper">
      <div className="topSectionHomeScreen">
        <Navbar />
        <HeroSection />
      </div>

      <div className="player-wrapper" onClick = {() => setPlaying(!playing)}>
        <ReactPlayer
          className="react-player"
          url="https://lucifer-ux.github.io/trial-image/unwrapped-lucifer-ux.mp4"
          width="100%"
          height="100%"
          light={
            <img className="imageOfAvatar" src={avatarImage} alt="Thumbnail" />
          }
          playing={playing}
        />
      </div>
    </div>
  );
};

export default HomePage;
