// src/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; 

function About() {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="about-header"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1>Oguzhan Burhan</h1>
        <p>oguzburhn@gmail.com ❖ (647) 786-1567 ❖ Toronto, ON</p>
      </motion.div>
      
      <motion.section 
        className="about-section"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <h2>Work Experience</h2>
        <motion.div className="about-item"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h3>AI Developer at Remotasks</h3>
          <p>Jan. 2024 – Present, Denver, CO</p>
          <ul>
            <li>Reviewed and analyzed AI code to identify areas for optimization and improvement, ensuring high-quality output.</li>
            <li>Implemented strategies to enhance the accuracy and effectiveness of AI-generated responses through fine-tuning and parameter adjustment.</li>
            <li>Compared and Analyzed multiple AI-generated responses to programming-related user queries, assessing correctness, clarity and relevance.</li>
          </ul>
        </motion.div>
        <motion.div className="about-item"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h3>Software Developer at Droplet Lab</h3>
          <p>Jun. 2023 – Present, Toronto, ON</p>
          <ul>
            <li>Developed expertise in cloud-based solutions through extensive use of Microsoft Azure, focusing on Azure SQL database.</li>
            <li>Applied image processing algorithms to elevate data analysis and visualization capabilities.</li>
            <li>Designed and implemented user-friendly GUIs using Python and Tkinter, enhancing product usability.</li>
            <li>Spearheaded OneDrive API integration, facilitating seamless data storage and retrieval for our products.</li>
          </ul>
        </motion.div>
        <motion.div className="about-item"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <h3>Q&A Engineer at Eldorado Gold Corporation</h3>
          <p>Jan. 2018 – Feb. 2019, Izmir, TR</p>
          <ul>
            <li>Collaborated with multi-disciplinary teams to develop solutions to complex geologic problems, leveraging ArcGIS for advanced geospatial analysis and Python for data processing and automation.</li>
          </ul>
        </motion.div>
      </motion.section>

      <motion.section 
        className="about-section"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 1 }}
      >
        <h2>Education</h2>
        <motion.div className="about-item"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <h3>George Brown College</h3>
          <p>Diploma, Computer Programming and Analysis, May 2024, Toronto, ON</p>
        </motion.div>
        <motion.div className="about-item"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <h3>University of Kocaeli</h3>
          <p>Bachelor’s Degree, Geological Engineering, May 2017, Kocaeli, TR</p>
        </motion.div>
      </motion.section>

      <motion.section 
        className="about-section"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <h2>Skills</h2>
        <motion.div className="about-item"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <h3>Hard Skills</h3>
          <p>Python, MongoDB, Postman, React, JavaScript, REACT Native, Microsoft Azure, APIs, Machine Learning, Node.js</p>
        </motion.div>
        <motion.div className="about-item"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
        >
          <h3>Soft Skills</h3>
          <p>JAVA, CSS, HTML, MySQL, Git, Node.js, PHP, Microservice architecture (Spring Cloud, Eureka)</p>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default About;
