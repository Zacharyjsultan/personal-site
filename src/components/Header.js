import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="left-nav">
          <Link to="/">Zach Sultan</Link>
          <Link to="/about">About Zach</Link>
        </div>
        <div className="right-nav">
          <button onClick={() => setOpen(!isOpen)}>
            <i className="fa fa-bars"></i>
          </button>
          {isOpen && (
            <ul>
              <li>
                <Link to="/about">About Zach</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">Projects</Link>
              </li>
              <li>
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
