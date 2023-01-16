import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-nav">
        <a
          classname="Email"
          href="mailto:zacharyjsultan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Email Me
        </a>
      </div>
    </header>
  );
};

export default Header;
