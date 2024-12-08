import React from 'react';
import { FaSchool } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience as EXP } from '../helpers/Experience';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        {EXP.map(exp => (
          <VerticalTimelineElement
            key={exp.id}
            className={`vertical-timeline-element--${exp.type}`}
            date={exp.date}
            iconStyle={
              exp.type === 'education'
                ? { background: '#3e497a', color: '#fff' }
                : { background: '#e9d35b', color: '#fff' }
            }
            icon={exp.type === 'education' ? <FaSchool /> : <MdWork />}
          >
            <h3 className='vertical-timeline-element-title'>{exp.title}</h3>
            {exp.location && (
              <h4 className='vertical-timeline-element-subtitle'>
                {exp.location}
              </h4>
            )}
            {exp.overview && (
              <p>
                <em>{exp.overview}</em>
              </p>
            )}
            {Array.isArray(exp.description) ? (
              <ul
                style={{
                  paddingLeft: '0'
                }}
              >
                {exp.description.map((desc, index) => (
                  <li
                    key={index}
                    style={{
                      marginTop: '1rem'
                    }}
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{exp.description}</p>
            )}
            {Array.isArray(exp.technicalSkills) && (
              <p>
                <strong>Technical Skills:</strong>{' '}
                {exp.technicalSkills.join(', ')}
              </p>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
