import React from 'react';
import './datapreview.css';

const App = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header>
        <div className="header">
          <span className="logo">Logo</span>
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
              <li className="menu-item">Home</li>
              <li className="menu-item active">Dataset</li>
              <li className="menu-item">Models</li>
            </ul>
          </nav>
        </aside>

        {/* <main className="main-content">
          <header className="main-content-header">
            <div className="dataset-heading">
              <h1>Datasets</h1>
            </div>
            <div className="dataset-search">
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Search"
                className="search-bar"
              />
              <button type="button" className="search-btn">i</button>
              <label htmlFor="file-upload" className="custom-file-upload">
                Upload CSV
              </label>
              <input type="file" id="file-upload" accept=".csv" />
            </div>
          </header>
          <p>Upload, view, delete or manage all data</p>

        </main> */}
      </div>
    </div>
  );
};

export default App;
