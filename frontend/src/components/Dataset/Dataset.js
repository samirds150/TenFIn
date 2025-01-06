// AddDatasetPage.js
import React, { useState } from "react";
import "./datasetpage.css";

const AddDatasetPage = () => {
  const [datasets, setDatasets] = useState([
    "Singapore Transaction Data",
    "UK Transaction Data",
    "Portfolio Optimization Data",
    "Credit Assessment Data",
  ]);
  const [selectedDataset, setSelectedDataset] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDatasetSelect = (dataset) => {
    setSelectedDataset(dataset);
  };

  const handleAddDataset = () => {
    const newDataset = prompt("Enter the name of the new dataset:");
    if (newDataset) {
      setDatasets([...datasets, newDataset]);
    }
  };

  const filteredDatasets = datasets.filter((dataset) =>
    dataset.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="add-dataset-page">
      <header className="header">
        <div className="progress-bar">
          <span className="step active">Add Dataset</span>
          <span className="step">Select Model</span>
          <span className="step">Execute Test</span>
        </div>
        <div className="header-options">
          <div className="notification">Notification</div>
          <div className="account">Account</div>
        </div>
      </header>

      <div className="content">
        <div className="dataset-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="filter-button" onClick={handleAddDataset}>
              + Add Dataset
            </button>
          </div>
          <ul className="dataset-list">
            {filteredDatasets.map((dataset, index) => (
              <li
                key={index}
                className={
                  selectedDataset === dataset ? "dataset-item selected" : "dataset-item"
                }
                onClick={() => handleDatasetSelect(dataset)}
              >
                {dataset}
              </li>
            ))}
          </ul>
        </div>

        <div className="preview-section">
          <h3>Preview</h3>
          <div className="preview-box">
            {selectedDataset ? (
              <p>{selectedDataset}</p>
            ) : (
              <p>Select a dataset to preview details</p>
            )}
          </div>
        </div>
      </div>

      <footer className="footer">
        <button className="cancel-button">Cancel</button>
        <button
          className="continue-button"
          disabled={!selectedDataset}
          onClick={() => alert(`Continuing with ${selectedDataset}`)}
        >
          Select & Continue
        </button>
      </footer>
    </div>
  );
};

export default AddDatasetPage;
