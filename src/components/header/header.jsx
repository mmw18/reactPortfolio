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
          <li><a href="about-me">About Me</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#contact">Contact Me</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
