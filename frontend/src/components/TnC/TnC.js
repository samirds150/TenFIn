import React from "react";
import { useNavigate } from "react-router-dom";
import "./tnc.css";
import hsbclogo from "./images/download.png"
import quantum from "./images/Hasnain.jpg"


const TnC = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const NextPage = () => {
    navigate("/next"); // Navigate to the "next" page
  };

  return (
    <div className="tnc-container">
    {/* Logo and Heading */}
    <header className="tnc-header">
      <img src={hsbclogo} alt="HSBC" className="hsbc-logo" />
      <h1 className="heading">Introduction to Quantum Machine Learning QML</h1>
    </header>

    {/* Image and Content Section */}
    <div className="tnc-content">
      <img src={quantum} alt="m" className="logo" />
      <div className="tnc-text">
        <h2>Premis of QML</h2>
        <p>
          Quantum Machine Learning (QML) provides a new avenue for analyzing complex data, 
          leveraging quantum computing's unique ability to capture patterns that classical algorithms 
          might overlook. While QML is not necessarily faster in this application, its strength lies in 
          understanding and processing intricate relationships in data, especially when classical approaches 
          struggle to find meaningful signals.
        </p>
        <button className="tnc-button" onClick={NextPage}>next</button>
      </div>
    </div>
  </div>
);
};

export default TnC;
