import React from 'react';
import { IconContext } from 'react-icons';
import { FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <>
    <footer className="container mx-auto py-8 px-3 mb-8 text-gray-800 flex">
      <IconContext.Provider value={{ size: '2em', className: 'mx-auto' }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:contact@makeuc.io"
          className="flex-1 social-icon"
        >
          <FaEnvelope />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/makeuc"
          className="flex-1 social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/uc_ieee"
          className="flex-1 social-icon"
        >
          <FaInstagram />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/uc_ieee"
          className="flex-1 social-icon"
        >
          <FaTwitter />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/makeuc"
          className="flex-1 social-icon"
        >
          <FaGithub />
        </a>
      </IconContext.Provider>
    </footer>
  </>
);

export default Footer;
