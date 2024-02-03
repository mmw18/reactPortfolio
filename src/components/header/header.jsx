import React, { useState } from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom'; // Updated import to include useLocation

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const location = useLocation(); // Using useLocation to get the current route
  const isHomePage = location.pathname === '/'; // Checking if the current route is the homepage

  return (
    <header>
      {!isHomePage && ( // Conditionally render the overlay title based on the route
        <div>
          <Link to="/" className="overlay-title-link">
            <h1 className="overlay-title">Megan Wright</h1>
          </Link>
        </div>
      )}
      <button className="hamburger" onClick={() => {
        setIsNavExpanded(!isNavExpanded);
        console.log("Nav Expanded:", !isNavExpanded);
      }}>
        ☰
      </button>
      <nav className={isNavExpanded ? "expanded" : ""}>
        <ul>
          <li><a href="/about-me">About Me</a></li> {/* Updated href to use '/' for consistency with routing */}
          <li><a href="/projects">Portfolio</a></li>
          <li><a href="/contact">Contact Me</a></li>
          <li><a href="/resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;






// import React from 'react';
// import './Header.css';

// function Header() {
//   return (
//     <header>
//       <div>
//         <h1 className="overlay-title">Megan Wright</h1>
//       </div>
//       <nav>
//         <ul>
//           <li><a href="about-me">About Me</a></li>
//           <li><a href="#projects">Portfolio</a></li>
//           <li><a href="#contact">Contact Me</a></li>
//           <li><a href="#resume">Resume</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
