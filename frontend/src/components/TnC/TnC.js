import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tnc.css";
import hsbclogo from "./images/download.png";
import quantum1 from "./images/quantum1.jpg"; 
import quantum2 from "./images/quantum2.jpg";
import quantum3 from "./images/quantum3.jpg";
import quantum4 from "./images/quantum4.jpg";

const TnC = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  // Array to store the different content and images
  const contentData = [
    {
      title: "Premis of QML",
      description:
        "Quantum Machine Learning (QML) provides a new avenue for analyzing complex data, leveraging quantum computing's unique ability to capture patterns that classical algorithms might overlook. While QML is not necessarily faster in this application, its strength lies in understanding and processing intricate relationships in data, especially when classical approaches struggle to find meaningful signals.",
      image: quantum1
    },
    {
      title: "Quantum Computing Basics",
      description:
        "Quantum computers use qubits, which have the unique ability to exist in multiple states simultaneously. This fundamental property allows quantum machines to solve certain problems more efficiently than classical computers.",
      image: quantum2
    },
    {
      title: "Applications of QML",
      description:
        "Quantum machine learning can be applied to various fields, such as optimization problems, natural language processing, and predictive modeling, offering significant improvements over classical methods in some scenarios.",
      image: quantum3
    },
    {
      title: "Challenges in QML",
      description:
        "Despite its potential, quantum machine learning faces challenges such as quantum noise, limited qubits, and the need for specialized hardware and algorithms to fully realize its potential.",
      image: quantum4
    },
    
  ];

  const [currentStep, setCurrentStep] = useState(0); // State to track the current step

  const NextPage = () => {
    if (currentStep < contentData.length - 1) {
      // If not the last content, increment step to show the next content
      setCurrentStep(currentStep + 1);
    } else {
      // Once all content has been shown, navigate to the next page
      navigate("/next");
    }
  };

  const { title, description, image } = contentData[currentStep]; // Get content for the current step

  return (
    <div className="tnc-container">
      {/* Logo and Heading */}
      <header className="tnc-header">
        <img src={hsbclogo} alt="HSBC" className="hsbc-logo" />
        <h1 className="heading">Introduction to Quantum Machine Learning QML</h1>
      </header>

      {/* Image and Content Section */}
      <div className="tnc-content">
        <img src={image} alt="Quantum" className="logo" />
        <div className="tnc-text">
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="tnc-button" onClick={NextPage}>
            {currentStep === contentData.length - 1 ? "I agree" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TnC;
