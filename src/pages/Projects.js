import React from 'react';
import ProjectItem from '../components/ProjectItem';
// import Img

function Projects() {
    return (
        <div className='projects'>
            <h1>My personal projects</h1>
            <div className="projectList">
                <ProjectItem name="Social Media Website" image={}/>
                <ProjectItem />
            </div>
        </div>
    );
}

export default Projects;