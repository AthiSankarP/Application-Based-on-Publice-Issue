// src/components/IssueCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "../styles/Dashboard.css"; // Make sure this path is correct

const IssueCard = ({ imageSrc, issueLink, issueTitle, issueDescription }) => {
  return (
    <div className="issue-card">
      <img src={imageSrc} alt={issueTitle} className="issue-image" />
      <div className="issue-details">
        <Link to={issueLink} className="issue-title">{issueTitle}</Link>
        <p className="issue-description">{issueDescription}</p>
      </div>
    </div>
  );
};

IssueCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  issueLink: PropTypes.string.isRequired,
  issueTitle: PropTypes.string.isRequired,
  issueDescription: PropTypes.string.isRequired,
};

export default IssueCard;
