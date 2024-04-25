import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import oguzImage from './images/Oguz.png';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar is open by default

  // Adjust the sidebar visibility based on screen width
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIsOpen(false); // Automatically close the sidebar on mobile devices
      } else {
        setIsOpen(true); // Keep it always open on desktops
      }
    }

    // Listen to resize events
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize the correct state based on current window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to close the sidebar only if on a small screen
  const closeSidebarOnMobile = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <motion.div
        className="sidebar"
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <img src={oguzImage} alt="Oguz" className="profile-pic" />
        <ul>
          <li><Link to="/" onClick={closeSidebarOnMobile}>Home</Link></li>
          <li><Link to="/about" onClick={closeSidebarOnMobile}>About</Link></li>
          <li><Link to="/portfolio" onClick={closeSidebarOnMobile}>Portfolio</Link></li>
          <li><Link to="/contact" onClick={closeSidebarOnMobile}>Contact</Link></li>
        </ul>
      </motion.div>
    </>
  );
}

export default Sidebar;
