import React from 'react';
import '../styles/Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className='footer'>
            <div className="socialMedia">
                <a href="https://www.facebook.com/kids.the.5/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                <a href="https://github.com/theksbd" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/ho%C3%A0ng-%C4%91%E1%BB%97-thi%E1%BB%87n-4b77b8228/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            </div>
            <p>&copy; 2022 Đỗ Thiện Hoàng - theksbd</p>
        </div>
    );
}

export default Footer;