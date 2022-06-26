import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

function Header() {
  return (
    <div className="header">
      <h1>Julian Williams</h1>
      <div>
        <nav>
          <ul className="headerUl">
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
