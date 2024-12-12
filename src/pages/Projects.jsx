import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { PROJECTS } from '../data/Projects';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My projects</h1>
      <div className='projectList'>
        {PROJECTS.map(project => {
          return (
            <ProjectItem
              key={project.id}
              id={project.id}
              subName={project.subName}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
