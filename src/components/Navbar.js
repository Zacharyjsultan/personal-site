import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav>
      <div className="left-nav"></div>
      <div className="right-nav">
        <button className="dropdown" onClick={() => setOpen(!isOpen)}>
          <i className="fa fa-bars"></i>Menu
        </button>
        {isOpen && (
          <ul className="dropdown-buttons">
            <li className="about-button">
              <Link to="/home">About</Link>
            </li>
            <li className="projects-button">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="blog-button">
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              {" "}
              <a
                className="Email"
                href="mailto:zacharyjsultan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Email
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
