import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Resume</h1>

      <div className="skills-section">
        <div className="skills-category">
          <h2>Front-End Technical Skills</h2>
          <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>CSS Frameworks (Bootstrap, Bulma)</li>
          <li>React, Redux</li>
          <li>Responsive Design, Accessibility</li>
          <li>UX/UI Principles</li>
          <li>Version Control (Git & GitHub)</li>
          <li>Testing (Jest)</li>
          <li>Browser Developer Tools Proficiency</li>
          <li>Webpack</li>
        </ul>
        </div>
        <div className="skills-category">
          <h2>Soft Skills</h2>
          <ul>
          <li>Strategic Perspective</li>
          <li>Imaginative Solution Development</li>
          <li>Exceptional Interpersonal Abilities</li>
          <li>Proficient in Autonomous Problem Solving</li>
          <li>Effective Communication</li>
          <li>Team Collaboration</li>
          <li>Time Management</li>
          <li>Adaptability</li>
          <li>Critical Thinking</li>
        </ul>
        </div>
        <div className="skills-category">
          <h2>Back-End Technical Skills</h2>
          <ul>
          <li>Node.js, Express.js</li>
          <li>SQL, NoSQL (MongoDB)</li>
          <li>Object-Relational Mapping (Sequelize)</li>
          <li>RESTful API Development</li>
          <li>Server-Side Rendering</li>
          <li>Authentication & Authorization</li>
          <li>Web Security Fundamentals</li>
          <li>Visual Studio Code</li>
          <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
        </ul>
        </div>
      </div>

      <div className="download-resume">
        <a href="https://docs.google.com/document/d/1CJXZ7SbvVwrsgU4OL74aBG9g9IBmYj1Aq83N1ISj8RM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Click here for the downloadable version
        </a>
      </div>
    </div>
  );
};

export default Resume;


