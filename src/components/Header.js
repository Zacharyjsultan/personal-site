import React from "react";

import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-nav">
          <a
            className="Email"
            href="mailto:zacharyjsultan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Contact
          </a>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
