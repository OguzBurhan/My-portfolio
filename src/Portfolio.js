import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';
import VideoModal from './VideoModal'; // Import the modal component


function Portfolio() {
  const projects = [
    { 
      id: 1, 
      title: 'Dental Management WebApp', 
      description: 'Source Code', 
      githubUrl: 'https://github.com/OguzBurhan/Dental_Management_webApp.git',
      videoUrl: 'path_to_dental_management_video.mp4' // Add this line
    },
    { 
      id: 2, 
      title: 'Spring Social App', 
      description: 'Source Code', 
      githubUrl: 'https://github.com/OguzBurhan/SpringSocial_app.git',
      videoUrl: 'path_to_dental_management_video.mp4' // Add this line
    },
    { 
        id: 3, 
        title: 'Employe Purschase Management', 
        description: 'Source Code', 
        githubUrl: 'https://github.com/OguzBurhan/Employee_purchase_management_system',
        videoUrl: 'path_to_dental_management_video.mp4' // Add this line
      },
      { 
        id: 4, 
        title: 'File Management System', 
        description: 'Source Code', 
        githubUrl: 'https://github.com/OguzBurhan/File_management_system.git',
        videoUrl: 'path_to_dental_management_video.mp4' // Add this line
      },
      { 
        id: 5, 
        title: 'Dental Management', 
        description: 'Source Code',  
        githubUrl: 'https://github.com/OguzBurhan/Dental_Management_App.git',
        videoUrl: 'path_to_dental_management_video.mp4' // Add this line
      },
    
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="portfolio-container">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.2 }}
            className="project-link"
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.a>
          {project.videoUrl && (
            <button onClick={() => setSelectedVideo(project.videoUrl)} className="watch-video-button">
              Watch Video
            </button>
          )}
        </div>
      ))}
      <VideoModal 
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo}
      />
    </div>
  );
}

export default Portfolio;
