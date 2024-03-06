// import React from 'react'
import "./nav_style.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="flex top_nav justify-between items-center w-full">
      <div className="cursor-not-allowed">about</div>
      <h1 className="logo">
        <Link to="/">Post Vision</Link>
      </h1>
      <div className="flex gap-4 items-center">
        <div className="cursor-not-allowed">Contacts</div>
        <div className="login-Btn">
          <Link to="/auth/login">User Join </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
