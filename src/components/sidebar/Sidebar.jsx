import React from 'react'
import '../styles/Sidebar.css'
import SidebarButton from './SidebarButton';
import { MdSpaceDashboard, MdBarChart, MdSettings } from "react-icons/md";

const Sidebar = ({ isDarkMode }) => {
  return (
    <div className='sidebar-container'>
      <div className="logo">
        {isDarkMode
          ? <img src='/assets/logo-dark.svg' alt="Logo Dark" />
          : <img src='/assets/logo-light.svg' alt="Logo Light" />}
      </div>
      <hr className="sidebar-separator" />
      <div className="options">
        <SidebarButton text="Dashboard" icon={<MdSpaceDashboard/>}/>
        <SidebarButton text="Charts" icon={<MdBarChart/>}/>
        <SidebarButton text="Settings" icon={<MdSettings/>}/>
      </div>
    </div>
  )
}

export default Sidebar
