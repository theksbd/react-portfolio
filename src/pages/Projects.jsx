import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My projects</h1>
      <div className='projectList'>
        {ProjectList.map(project => {
          return (
            <ProjectItem
              key={project.id}
              id={project.id}
              name={project.name}
              image={project.image}
              src={project.src}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
