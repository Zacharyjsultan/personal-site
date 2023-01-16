import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-nav">
          <Link to="/home" className="home-button">
            <button>Home</button>
          </Link>

          <a
            className="Email"
            href="mailto:zacharyjsultan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Contact</button>
          </a>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
