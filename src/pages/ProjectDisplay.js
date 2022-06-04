import React from 'react';
import '../styles/ProjectDisplay.css'
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GithubIcon from '@material-ui/icons/GitHub';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];

    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt="project" />
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <a href="https://github.com/theksbd" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
        </div>
    );
}

export default ProjectDisplay;