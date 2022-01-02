import React from 'react';
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
                <a href="about">About Me</a>
              </li>
              <li>
                <a href="portfolio">Portfolio</a>
              </li>
              <li>
                <a href="contact">Contact Me</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
