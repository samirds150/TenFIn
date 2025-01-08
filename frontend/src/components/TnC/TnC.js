import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tnc.css";
import hsbclogo from "./images/download.png";
import { contentData } from "./content"; // Import contentData from the new file

const TnC = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const NextPage = () => {
    if (currentStep < contentData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      if (isChecked) {
        navigate("/next");
      } else {
        alert("Please read and agree to the Terms & Conditions to proceed.");
      }
    }
  };

  const { title, description, image } = contentData[currentStep];

  return (
    <div className="tnc-container">
      <header className="tnc-header">
        <img src={hsbclogo} alt="HSBC" className="hsbc-logo" />
        <h1 className="heading">Introduction to Quantum Machine Learning QML</h1>
      </header>

      <div className="tnc-content">
        <img src={image} alt="Quantum" className="logo" />
        <div className="tnc-text">
          <h2>{title}</h2>
          <p>{description}</p>
          
          {currentStep === contentData.length - 1 && (
            <div className="checkbox-container">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="tnc-checkbox"
                />
                <span>Read and agree to our Terms & Conditions</span>
              </label>
            </div>
          )}

          <button 
            className="tnc-button" 
            onClick={NextPage}
          >
            {currentStep === contentData.length - 1 ? "I agree" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TnC;