import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="left-nav">
          <Link to="/">Zach Sultan</Link>
        </div>
        <div className="right-nav">
          <button className="dropdown" onClick={() => setOpen(!isOpen)}>
            <i className="fa fa-bars"></i>Menu
          </button>
          {isOpen && (
            <ul>
              <li className="about-button">
                <Link to="/about">About Zach</Link>
              </li>
              <li className="contact-button">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="projects-button">
                <Link to="/about">Projects</Link>
              </li>
              <li className="blog-button">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
