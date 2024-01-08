import React from 'react';
import './Footer.css';

import githubLogo from '../../assets/github-white.png';  // Update with the correct path
import linkedInLogo from '../../assets/linkedIn.png';  // Update with the correct path
import youtubeMusicLogo from '../../assets/youtube.png';  // Update with the correct path

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/mmw18" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub" className="footer-logo" />
      </a>
      <a href="https://music.youtube.com/playlist?list=PLF_Q21nkhOrY8pOWC4w7Cqb3UlRmmguI7&si=emWQn57GQEnpJ7FD" target="_blank" rel="noopener noreferrer">
        <img src={youtubeMusicLogo} alt="YouTube Music" className="footer-logo" />
      </a>
      <a href="https://www.linkedin.com/in/meganmwright00" target="_blank" rel="noopener noreferrer">
        <img src={linkedInLogo} alt="LinkedIn" className="footer-logo" />
      </a>
    </footer>
  );
}

export default Footer;

