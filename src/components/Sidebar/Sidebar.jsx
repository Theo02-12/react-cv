import React, { useState } from 'react';
import './Sidebar.css'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <button onClick={toggleSidebar} className='responsive-btn-navbar'><i class="fa-solid fa-bars"></i></button>
      <ul>
        <li><a href=""><i class="fa-solid fa-house"></i></a></li>
        <li><a href="">A PROPOS</a></li>
        <li><a href="">PARCOURS</a></li>
        <li><a href="">COMPETENCES</a></li>
        <li><a href="">CONTACT</a></li>
        
      </ul>
    </div>
  );
};

export default Sidebar;