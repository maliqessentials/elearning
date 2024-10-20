import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import ElearningPlatform from './dashboard';
import CoursesPage from './CoursesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ElearningPlatform />} />
        
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
