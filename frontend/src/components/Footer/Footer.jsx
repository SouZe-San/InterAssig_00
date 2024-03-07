// import React from 'react'
import "./footer_style.scss";
const Footer = () => {
  return (
    <div className="branding">
      <div className="upperLine"></div>
      <div className="brandingSection">
        <h3>
          Made by &copy;{" "}
          <a href="https://github.com/SouZe-San" target="_blank">
            Souze-San
          </a>{" "}
          | Terms & conditions applied | All rights reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
