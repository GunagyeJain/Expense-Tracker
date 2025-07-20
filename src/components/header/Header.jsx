import React from 'react'
import '../styles/Header.css'
//importing icons
import { IoMenu } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = ({ toggleDarkMode, toggleSidebar }) => {
  return (
    <div className='header-container'>
      <div className="sidebar-toggle-btn">
        <button onClick={toggleSidebar}>
            <IoMenu />
        </button>
      </div>
      <div className="theme-change-btn">
        <button onClick={toggleDarkMode}>
            <MdDarkMode />
        </button>
      </div>
    </div>
  )
}

export default Header
