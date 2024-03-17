import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import oguzImage from './images/Oguz.png'; 

function Sidebar() {
  return (
    <motion.div
      className="sidebar"
      initial={{ x: '-100vw' }} // Start off-screen to the left
      animate={{ x: 0 }} // Animate to its natural position
      transition={{ type: 'spring', stiffness: 120 }} 
    >
      <img src={oguzImage} alt="Oguz" className="profile-pic" /> {/* Profile picture */}

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </motion.div>
  );
}

export default Sidebar;
