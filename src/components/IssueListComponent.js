// src/components/IssueListComponent.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/IssueList.css";

function IssueListComponent({ issues }) {
  return (
    <div className="issue-list-container">
      <h2>List of Public Issues</h2>
      <ul className="issue-list">
        {issues.map((issue) => (
          <li key={issue.id} className="issue-item">
            <Link to={`/issue/${issue.id}`}>{issue.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IssueListComponent;
