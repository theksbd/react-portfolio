import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, subName, id }) {
  const navigate = useNavigate();

  return (
    <div
      className='projectItem'
      onClick={() => {
        navigate('/projects/' + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
      <h1>{subName}</h1>
    </div>
  );
}

export default ProjectItem;
