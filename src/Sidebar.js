import React, { useState } from 'react';  // Import useState correctly
import { motion } from 'framer-motion';   // Import motion correctly
import { Link } from 'react-router-dom';  // Ensure Link is imported from 'react-router-dom'
import oguzImage from './images/Oguz.png'; // Check the path and make sure it's correct


function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>Menu</button>
      {isOpen && (
        <motion.div
          className="sidebar"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          <img src={oguzImage} alt="Oguz" className="profile-pic" />
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </motion.div>
      )}
    </>
  );
}

export default Sidebar;
