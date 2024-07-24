// src/components/IssueDetailComponent.js
import React from "react";
import { useParams } from "react-router-dom";
import "../styles/IssueDetail.css";

function IssueDetailComponent({ issues }) {
  const { id } = useParams();
  const issue = issues.find((issue) => issue.id === parseInt(id));

  return (
    <div className="issue-detail-container">
      <h2>Issue Details</h2>
      {issue ? (
        <div className="issue-detail">
          <h3>{issue.title}</h3>
          <p>Location: {issue.location}</p>
          <p>Description: {issue.description}</p>
        </div>
      ) : (
        <p>Issue not found</p>
      )}
    </div>
  );
}

export default IssueDetailComponent;
