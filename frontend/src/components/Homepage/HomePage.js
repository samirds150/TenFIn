import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./homepage.css";

const NextPage = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { name } = location.state || { name: "Guest" }; // Fallback to "Guest" if no name is provided
  const handleAddTestClik = () => {
    navigate("/dataset");
  }

  return (
    <div className="nextpage-container">
      <aside className="sidebar">
        <div className="logo">LOGO</div>
        <nav className="menu">
          <ul>
            <li className="menu-item active">Home</li>
            <li className="menu-item active">Dataset</li>
            <li className="menu-item active">Models</li>
          </ul>
        </nav>
        <div className="user-guide">User Guide</div>
      </aside>

      <main className="content">
        <header className="header">
          <h1>Welcome, {name}</h1>
          <div className="header-options">
            <div className="notification">Notification</div>
            <div className="account">Account</div>
          </div>
        </header>

        <section className="main-section">
          <div className="new-test">
            <p>Start a new test</p>
            <div className="add-test" onClick={handleAddTestClik}>+</div>
          </div>

          <div className="test-history">
            <h2>Test History</h2>
            <div className="test-cards">
              <div className="test-card">
                <h3>Quantum Fraud Model</h3>
                <p>Dataset: model.csv</p>
              </div>
              <div className="test-card">
                <h3>Traditional Fraud Model</h3>
                <p>Dataset: model.csv</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NextPage;
