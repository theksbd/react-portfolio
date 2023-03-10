import React from "react";
import "../styles/Projects.css";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem
              key={project.id}
              id={index}
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
