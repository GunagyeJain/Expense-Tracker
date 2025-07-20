import React, { useEffect, useState } from 'react';
import './App.css';

//importing react router
import { Routes, Route, Navigate } from 'react-router-dom';

//importing pages
import Dashboard from './pages/Dashboard';
import Charts from './pages/Charts';
import Settings from './pages/Settings';

//importing components
import Header from './components/header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  //theme state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isDarkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  //sidebar open/close state
  const [isSidebarOpen, setIsSidebarOpen] = useState(()=>{
    const storedSidebarState = localStorage.getItem('sidebar');
    return storedSidebarState ? JSON.parse(storedSidebarState) : (true);
  });

  useEffect(() => {
    localStorage.setItem('sidebar', JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="sidebar">
        <Sidebar isDarkMode={isDarkMode}/>
      </div>
      <div className="header">
        <Header toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
