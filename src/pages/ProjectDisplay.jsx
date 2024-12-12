import React from 'react';
import { AiFillGithub, AiFillPlayCircle } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { PROJECTS } from '../data/Projects';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = PROJECTS.find(project => project.id === parseInt(id));

  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} alt='project' />
      <div className='btn-container'>
        {project.src.code === null ? null : (
          <a
            className='btn'
            href={project.src.code}
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillGithub />
          </a>
        )}

        {project.src.preview === null ? null : (
          <a
            className='btn'
            href={project.src.preview}
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillPlayCircle />
          </a>
        )}
        {project.src.code === null && project.src.preview === null ? (
          <p
            style={{
              color: '#d12e5f',
              fontSize: '1rem'
            }}
          >
            Source code and preview are not available due to privacy reasons
          </p>
        ) : null}
      </div>
      <div className='project-detail'>
        <p>
          <b>Description:</b> {project.description}
        </p>
        <p>
          <b>Team member:</b> {project.teamMembers}
        </p>
        <p>
          <b>Responsibilities:</b>
          <br />
          <ul>
            {project.responsibilities.map((responsibility, index) => {
              return (
                <li key={index}>
                  {responsibility}
                  <br />
                </li>
              );
            })}
          </ul>
        </p>
        <p>
          <b>Technologies in use:</b> {project.skills}
        </p>
      </div>
    </div>
  );
}

export default ProjectDisplay;
