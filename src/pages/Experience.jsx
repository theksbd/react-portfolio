import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";
import { MdWork } from "react-icons/md";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Ho Chi Minh City University of Technology - HCMUT
          </h3>
          <p>Bachelor of Engineering - Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="3/2022 - 5/2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Team member - MERC Team
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Thu Duc City, Vietnam
          </h4>
          <p>
            <em>
              Supported the team design and create an actual robot for the
              contest
            </em>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="6/2022 - 8/2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer Intern - DEK Technologies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            District 1, Ho Chi Minh City
          </h4>
          <p>
            <em>
              Developed IP Multimedia Subsystem - Provide telecommunication
              users various multimedia services
            </em>
          </p>
          <p>Develop an Android app using Android Studio and Java</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
