import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="home-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className="home-description"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4 }}
      >          
           Hello! I'm a passionate software developer with a love for creating beautiful and functional web applications. With a background in computer science and a keen eye for design, I blend technical skills with creativity to build user-friendly experiences. I specialize in back-end development, particularly with JavaScript, and I'm always eager to learn new technologies and frameworks to enhance my work.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.6 }}
        className="social-links"
      >
        <a href="https://linkedin.com/in/oguzhan-burhan-628a5b130" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/OguzBurhan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </motion.div>
      <motion.a
        href="/About"
        className="home-link"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        My Resume
      </motion.a>
    </motion.div>
  );
}

export default Home;
