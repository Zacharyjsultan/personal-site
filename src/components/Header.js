import { Button } from "@mui/material";
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
            <Button variant="outlined">Home</Button>
          </Link>

          <a
            className="Email"
            href="mailto:zacharyjsultan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outlined">Contact</Button>
          </a>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
