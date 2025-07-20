import React from 'react'
import '../styles/Sidebar.css'
// import { MdSpaceDashboard, MdBarChart, MdSettings } from "react-icons/md";
import { Link } from 'react-router-dom';

const SidebarButton = ({ text, icon }) => {
  return (
    <Link to={`/${text.toLowerCase()}`} className='sidebar-option-btn'>
        <div className="icon">
            {icon}
        </div>
        <div className="text">
            {text}
        </div>
    </Link>
  )
}

export default SidebarButton
