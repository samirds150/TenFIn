import React from 'react';
import hsbcLogo from "./download.png";
import { useLocation, useNavigate } from "react-router-dom";

import './homepage.css';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddTestClick = () => {
    navigate("/dataset");
  };
  return (
    <div className="container">
      {/* Header Section */}
      <header>
        <div className="header">
        <img src={hsbcLogo} alt="HSBC Logo" className="hsbc-logo" />
          <div className="header-content">
            <div className="content">Notification</div>
            <div className="content">Account</div>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="content-container">
        <aside className="sidebar">
          <nav>
            <ul className="sidebar-content">
              <li className="menu-item active">Home</li>
              <li className="menu-item">Dataset</li>
              <li className="menu-item">Models</li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <header className="main-header">
            <h1>Welcome {location.state?.name|| "User"}</h1>
          </header>
          <div className="new-test">
            <button className="add-test-btn" onClick={handleAddTestClick}>+ Start New Test</button>
          </div>

          <div className="test-history">
            <h1>History</h1>
            <p>All of your test history will appear here</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
