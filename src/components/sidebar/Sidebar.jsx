import React from "react";
import "../styles/Sidebar.css";
import SidebarButton from "./SidebarButton";
import { MdSpaceDashboard, MdBarChart, MdSettings, MdPerson } from "react-icons/md";

const Sidebar = ({ isDarkMode, user, onLogout }) => {
  return (
    <div className="sidebar-container">
      <div className="top-content">
        <div className="logo">
          <img src={isDarkMode ? "/assets/logo-dark.svg" : "/assets/logo-light.svg"} alt="Logo" />
        </div>
        <hr className="sidebar-separator" />
        <div className="options">
          <SidebarButton text="Dashboard" icon={<MdSpaceDashboard />} />
          <SidebarButton text="Charts" icon={<MdBarChart />} />
          <SidebarButton text="Settings" icon={<MdSettings />} />
        </div>
      </div>
      <div className="accounts">
        {user ? (
          <SidebarButton text="Logout" icon={<MdPerson />} onClick={onLogout} />
        ) : (
          <SidebarButton text="Login" icon={<MdPerson />} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
