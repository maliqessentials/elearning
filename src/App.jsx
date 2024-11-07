import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ElearningPlatform from "./dashboard";
import CoursesPage from "./CoursesPage";
import AssignmentView from "./assignmentView";
import AuthSystem from "./login";
import Schedule from "./SchedulePage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/login" element={<AuthSystem />} />
        <Route path="/" element={<ElearningPlatform />} />
        <Route path="/assignment/:id" element={<AssignmentView />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
