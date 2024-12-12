import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FOOTERS } from '../data/Footers';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        {FOOTERS.map(footer => (
          <a
            key={footer.id}
            href={footer.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {footer.icon === 'Facebook' ? (
              <FaFacebook />
            ) : footer.icon === 'Twitter' ? (
              <FaTwitterSquare />
            ) : footer.icon === 'Github' ? (
              <AiFillGithub />
            ) : footer.icon === 'Email' ? (
              <MdEmail />
            ) : footer.icon === 'Linkedin' ? (
              <AiFillLinkedin />
            ) : null}
          </a>
        ))}
      </div>
      <p>&copy; {new Date().getFullYear()} Đỗ Thiện Hoàng - theksbd</p>
    </div>
  );
}

export default Footer;
