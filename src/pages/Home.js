import React from 'react';
import '../styles/Home.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Home() {
    const hour = new Date().getHours();

    const getMessageFromCurrentHour = hour => {
        if (hour < 12) {
            return 'morning';
        } else if (hour < 18) {
            return 'afternoon';
        } else {
            return 'evening';
        }
    }

    return (
        <div className='home'>
            <div className="about">
                <h2> Good {getMessageFromCurrentHour(hour)}, My Name is Hoàng </h2>
                <img src={require('../images/profile.png')} alt="my profile" />
                <div className="prompt">
                    <p>A software and web developer with a huge eagerness to learn and create</p>
                    <a href="https://www.facebook.com/kids.the.5/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                    <a href="https://github.com/theksbd" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
                    <a href="mailto: hoang.do19092001@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
                    <a href="https://www.linkedin.com/in/ho%C3%A0ng-%C4%91%E1%BB%97-thi%E1%BB%87n-4b77b8228/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Languages</h2>
                        <span>C, C++, Java, Python, Javascript</span>
                    </li>
                    <li className="item">
                        <h2>Front-end</h2>
                        <span>HTML5, CSS3, Bootstrap, ReactJS</span>
                    </li>
                    <li className="item">
                        <h2>Back-end</h2>
                        <span>NodeJS, ExpressJS, MySQL</span>
                    </li>
                    <li className="item">
                        <h2>Other</h2>
                        <span>Git</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;