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
          Here to Show Others <br />
        </h1>
        <h1 className="text-8xl font-bold relative">
          <span className="special_word">Thoughts </span>
          <div className="text-block">
            <span className="ml-16"></span>
            We are fueled by Your passion for creating distinctive experiences that set you apart
            from the sea of ordinary brands in today&apos;s market.
          </div>
        </h1>
      </div>

      <div className="w-screen flex justify-center mt-[10vh] scroll_btn_container">
        <ScrollBtn />
      </div>
    </div>
  );
};

export default Hero;
