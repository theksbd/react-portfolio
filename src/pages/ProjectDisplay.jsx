import React from "react";
import "../styles/ProjectDisplay.css";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { AiFillGithub, AiFillPlayCircle } from "react-icons/ai";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="project" />
      <div className="btn-container">
        <a
          className="btn"
          href={project.src.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          className="btn"
          href={project.src.preview}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillPlayCircle />
        </a>
      </div>
      <p>
        <b>Technologies in use:</b> {project.skills}
      </p>
    </div>
  );
}

export default ProjectDisplay;
