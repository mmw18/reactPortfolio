import React from 'react';
import './projects.css';
import githubIcon from '../../assets/github-mark.png';

const projects = [
  { name: 'JavaScript Quiz', url: 'https://mmw18.github.io/JavaScript-Quiz/', repo: 'https://github.com/mmw18/JavaScript-Quiz' },
  { name: 'FlavorFinder', url: 'https://dry-waters-69396-c33e43ba5835.herokuapp.com/', repo: 'https://github.com/mmw18/FlavorFinder' },
  { name: 'J.A.T.E', url: 'https://text-editor-mmw18-1a3f7b5bdedd.herokuapp.com/', repo: 'https://github.com/mmw18/TextEditor' },
  { name: 'Random Password Generator', url: 'https://mmw18.github.io/Random-Password-Generator/', repo: 'https://github.com/mmw18/Random-Password-Generator' },
  { name: 'Note Taker', url: 'https://notetaker-mmw18-90c45d738b00.herokuapp.com/', repo: 'https://github.com/mmw18/Note-Taker' },
  { name: '5-Day Weather Forecast', url: 'https://mmw18.github.io/5day-weather-forecast/', repo: 'https://github.com/mmw18/5day-weather-forecast' },
  { name: 'Portfolio (HTML/CSS)', url: 'https://mmw18.github.io/Portfolio-Project/', repo: 'https://github.com/mmw18/Portfolio-Project' },
  { name: 'Seamless Booking', url: 'https://deazymat.github.io/travel-project/', repo: 'https://github.com/Deazymat/travel-project' },
];

const Projects = () => {
    return (
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-name">{project.name}</a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="github-link">
              <img src={githubIcon} alt="" />
            </a>
          </div>
        ))}
      </div>
    );
  };
  

export default Projects;
