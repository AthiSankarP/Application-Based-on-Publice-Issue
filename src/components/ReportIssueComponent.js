// src/components/ReportIssueComponent.js
import React, { useState } from "react";
import "../styles/ReportIssue.css";

function ReportIssueComponent() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleReport = (e) => {
    e.preventDefault();
    // Implement issue report logic here
    alert("Issue reported successfully!");
    setTitle("");
    setLocation("");
    setDescription("");
  };

  return (
    <div className="report-issue-container">
      <h2>Report a Public Issue</h2>
      <form onSubmit={handleReport} className="report-issue-form">
        <input
          type="text"
          placeholder="Issue Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Report Issue</button>
      </form>
    </div>
  );
}

export default ReportIssueComponent;
