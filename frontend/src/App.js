import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TnC from './components/TnC/TnC';
import Homepage from './components/Homepage/HomePage';
import DatasetPage from './components/Dataset/Dataset'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TnC />} />
        <Route path="/next" element={<Homepage />} />
        <Route path="/dataset" element={<DatasetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
