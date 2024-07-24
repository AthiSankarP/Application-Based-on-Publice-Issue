// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import DashboardComponent from "./components/DashboardComponent";
import IssueListComponent from "./components/IssueListComponent";
import IssueDetailComponent from "./components/IssueDetailComponent";
import ReportIssueComponent from "./components/ReportIssueComponent";
import "./styles/App.css";
import { issues } from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/issues" element={<IssueListComponent issues={issues} />} />
          <Route path="/issue/:id" element={<IssueDetailComponent issues={issues} />} />
          <Route path="/report" element={<ReportIssueComponent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
