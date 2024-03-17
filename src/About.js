// src/About.js
import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Oguzhan Burhan</h1>
        <p>oguzburhn@gmail.com ❖ (647) 786-1567 ❖ Toronto, ON</p>
      </div>
      
      <section className="about-section">
        <h2>Work Experience</h2>
        {/* Remotasks */}
        <div className="about-item">
          <h3>AI Developer at Remotasks</h3>
          <p>Jan. 2024 – Present, Denver, CO</p>
          <ul>
            <li>Reviewed and analyzed AI code to identify areas for optimization and improvement, ensuring high-quality output.</li>
            <li>Implemented strategies to enhance the accuracy and effectiveness of AI-generated responses through fine-tuning and parameter adjustment.</li>
            <li>Compared and Analyzed multiple AI-generated responses to programming-related user queries, assessing correctness, clarity and relevance.</li>
          </ul>
        </div>
        {/* Droplet Lab */}
        <div className="about-item">
          <h3>Software Developer at Droplet Lab</h3>
          <p>Jun. 2023 – Present, Toronto, ON</p>
          <ul>
            <li>Developed expertise in cloud-based solutions through extensive use of Microsoft Azure, focusing on Azure SQL database.</li>
            <li>Applied image processing algorithms to elevate data analysis and visualization capabilities.</li>
            <li>Designed and implemented user-friendly GUIs using Python and Tkinter, enhancing product usability.</li>
            <li>Spearheaded OneDrive API integration, facilitating seamless data storage and retrieval for our products.</li>
          </ul>
        </div>
        {/* Eldorado Gold Corporation */}
        <div className="about-item">
          <h3>Q&A Engineer at Eldorado Gold Corporation</h3>
          <p>Jan. 2018 – Feb. 2019, Izmir, TR</p>
          <ul>
            <li>Collaborated with multi-disciplinary teams to develop solutions to complex geologic problems, leveraging ArcGIS for advanced geospatial analysis and Python for data processing and automation.</li>
          </ul>
        </div>
      </section>
      
      <section className="about-section">
        <h2>Education</h2>
        {/* George Brown College */}
        <div className="about-item">
          <h3>George Brown College</h3>
          <p>Diploma, Computer Programming and Analysis, May 2024, Toronto, ON</p>
        </div>
        {/* University of Kocaeli */}
        <div className="about-item">
          <h3>University of Kocaeli</h3>
          <p>Bachelor’s Degree, Geological Engineering, May 2017, Kocaeli, TR</p>
        </div>
      </section>
      
      <section className="about-section">
        <h2>Skills</h2>
        <div className="about-item">
          <h3>Hard Skills</h3>
          <p>Python, MongoDB, Postman, React, JavaScript, REACT Native, Microsoft Azure, APIs, Machine Learning, Node.js</p>
        </div>
        <div className="about-item">
          <h3>Soft Skills</h3>
          <p>JAVA, CSS, HTML, MySQL, Git, Node.js, PHP, Microservice architecture (Spring Cloud, Eureka)</p>
        </div>
      </section>
    </div>
  );
}

export default About;
