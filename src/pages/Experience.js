import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016 - 2019"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Nguyen Huu Cau High School, TP.HCM
                    </h3>
                    <p>High School Diploma</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2019 - Present'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Ho Chi Minh City University of Technology - HCMUT
                    </h3>
                    <p>Bachelor of Engineering - Computer Science</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="3/2022 - 5/2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Team member - MERC Team
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Thu Duc City, Vietnam
                    </h4>
                    <p>
                        Supported the team design and create an actual robot for the contest
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="6/2022 - 8/2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Software Developer Intern - DEK Technologies
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        District 1, Ho Chi Minh City
                    </h4>
                    <p>Developed IP Multimedia Subsystem - Provide telecommunication users various multimedia services</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;