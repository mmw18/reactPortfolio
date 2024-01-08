import React from 'react';
import './Projects.css'; // Import the CSS file

const projects = [
  { name: 'JavaScript Quiz', url: 'https://mmw18.github.io/JavaScript-Quiz/', repo: 'https://github.com/mmw18/JavaScript-Quiz' },
  { name: 'FlavorFinder', url: 'https://dry-waters-69396-c33e43ba5835.herokuapp.com/', repo: 'https://github.com/mmw18/FlavorFinder' },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" style={{ backgroundColor: `hsl(340, 100%, ${85 - index * 5}%)` }} key={index}>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-name">{project.name}</a>
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="/path-to-github-icon.png" alt="GitHub" /> {/* Replace with your GitHub icon path */}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
