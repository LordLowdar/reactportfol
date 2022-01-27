import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

function Header() {
  return (
    <header className="header">
      <h1>Julian Williams</h1>
      <div>
        <div>
          <nav class>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
