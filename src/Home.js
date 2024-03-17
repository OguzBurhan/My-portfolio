// src/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

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
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4 }}
      >          
          Hello! I'm a passionate software developer with a love for creating beautiful and functional web applications. With a background in computer science and a keen eye for design, I blend technical skills with creativity to build user-friendly experiences.
          I specialize in front-end development, particularly with React, and I'm always eager to learn new technologies and frameworks to enhance my work.
      </motion.p>
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
