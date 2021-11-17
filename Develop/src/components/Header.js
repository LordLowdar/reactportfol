import React from 'react';
import '../style.css';

function Header() {
  return (
    <header className="header">
      <h2>Julian Williams</h2>
      <div>
        <nav>
          <ul>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
