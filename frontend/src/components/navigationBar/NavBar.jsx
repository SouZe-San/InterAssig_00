// import React from 'react'
import "./nav_style.scss";
const NavBar = () => {
  return (
    <nav className="flex top_nav justify-between items-center w-full">
      <div>about</div>
      <h1 className="logo">Post Vision</h1>
      <div className="flex gap-4">
        <div className="">Contacts</div>
        <div className="">User Join</div>
      </div>
    </nav>
  );
};

export default NavBar;
