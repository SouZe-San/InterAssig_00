// import React from 'react'

import "./hero_style.scss";
import ScrollBtn from "./ScrollBtn";
const Hero = () => {
  return (
    <div className="heroSection relative  overflow-hidden  bgBlur">
      <div className="back_white_blob_top"></div>
      <div className="back_white_blob_down"></div>

      <div className="mainHeading px-[20rem]">
        <h1 className="text-9xl font-bold">
          <span className="ml-16"></span>We Are
        </h1>
        <h1 className="text-8xl font-bold">
          Here to Show Others <span className="special_word">Thoughts </span>
        </h1>
      </div>

      <div className="w-screen flex justify-center mt-16 scroll_btn_container">
        <ScrollBtn />
      </div>
    </div>
  );
};

export default Hero;
