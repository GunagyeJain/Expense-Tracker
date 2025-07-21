import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Charts from "./pages/Charts";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

// Firebase
import { auth } from "./services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Components
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const navigate = useNavigate();

  // Theme
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const stored = localStorage.getItem("sidebar");
    return stored ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    localStorage.setItem("sidebar", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Firebase auth state
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className={`app-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <div className="sidebar">
        <Sidebar isDarkMode={isDarkMode} user={user} onLogout={handleLogout} />
      </div>
      <div className="header">
        <Header toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/charts" element={user ? <Charts /> : <Navigate to="/login" />} />
          <Route path="/settings" element={user ? <Settings /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
