// src/Portfolio.js
import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css'; 

function Portfolio() {
  const projects = [
    { 
      id: 1, 
      title: 'Dental Management', 
      description: 'Dental Clinic Management Mobile App', 
      githubUrl: 'https://github.com/OguzBurhan/Dental_Management_App.git'
    },
    { 
      id: 2, 
      title: 'Spring Social App', 
      description: 'Social Media App', 
      githubUrl: 'https://github.com/OguzBurhan/SpringSocial_app.git'
    },
    { 
        id: 3, 
        title: 'Employe Purschase Management', 
        description: 'Employee Purchase Management System', 
        githubUrl: 'https://github.com/OguzBurhan/Employee_purchase_management_system'
      },
      { 
        id: 4, 
        title: 'File Management System', 
        description: 'File Management System', 
        githubUrl: 'https://github.com/OguzBurhan/File_management_system.git'
      },
    
  ];

  return (
    <div className="portfolio-container">
      {projects.map((project) => (
        <motion.a // motion.a for animation and linking
          key={project.id}
          href={project.githubUrl} 
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // For security
          className="project-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: project.id * 0.2 }}
        >
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export default Portfolio;
