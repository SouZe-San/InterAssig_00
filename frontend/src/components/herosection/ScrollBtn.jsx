// import React from 'react'
import "./hero_style.scss";
const ScrollBtn = () => {
  const runnableText = "Scroll Down - Scroll Down - Scroll Down - ";

  return (
    <div className="circle">
      <div className="logo"></div>
      <div className="text">
        <p>
          {runnableText.split("").map((char, i) => {
            return (
              <span key={i} style={{ transform: `rotate(${i * 8.5}deg)` }}>
                {char}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default ScrollBtn;
