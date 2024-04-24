import React, { useState } from 'react';
import './navbar2.css'; // You can create a CSS file for Navbar styles

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <div>
      <div className="navbar">
        <button className="hamburger-menu" onClick={toggleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        <h2>Navbar</h2>
      </div>
      {isSidebarOpen && <Sidebar />}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
    <h2>Sidebar</h2>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
    </ul>
      <h2>Sidebar</h2>
    </div>
  );
};

export default Navbar;
