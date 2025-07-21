import React from 'react';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';

const SidebarButton = ({ text, icon, onClick }) => {
  if (onClick) {
    return (
      <div className='sidebar-option-btn' onClick={onClick}>
        <div className="icon">{icon}</div>
        <div className="text">{text}</div>
      </div>
    );
  }

  return (
    <Link to={`/${text.toLowerCase()}`} className='sidebar-option-btn'>
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </Link>
  );
};

export default SidebarButton;
