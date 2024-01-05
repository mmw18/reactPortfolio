import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div>
        <h1 className="overlay-title">Megan Wright</h1>
      </div>
      <nav>
        <ul>
          <li><a href="https://www.linkedin.com/in/meganmwright00/">LinkedIn</a></li>
          <li><a href="https://github.com/mmw18">GitHub</a></li>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#projects-section">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
