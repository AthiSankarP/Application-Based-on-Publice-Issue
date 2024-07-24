// src/components/IssueCardsContainer.js
import React from 'react';
import IssueCard from './IssueCard'; // Ensure the path is correct

const issueData = [
  {
    imageSrc: 'path/to/water.jpg',
    issueLink: '/issue/water',
    issueTitle: 'Water Issues',
    issueDescription: 'Problems related to water supply and quality.',
  },
  {
    imageSrc: 'path/to/road.jpg',
    issueLink: '/issue/road',
    issueTitle: 'Road Issues',
    issueDescription: 'Problems related to road conditions and maintenance.',
  },
  {
    imageSrc: 'path/to/electricity.jpg',
    issueLink: '/issue/electricity',
    issueTitle: 'Electricity Issues',
    issueDescription: 'Problems related to electricity supply and infrastructure.',
  },
  {
    imageSrc: 'path/to/sanitation.jpg',
    issueLink: '/issue/sanitation',
    issueTitle: 'Sanitation Issues',
    issueDescription: 'Problems related to waste management and cleanliness.',
  },
];

const IssueCardsContainer = () => {
  return (
    <div className="issue-cards-container">
      {issueData.map((issue, index) => (
        <IssueCard
          key={index}
          imageSrc={issue.imageSrc}
          issueLink={issue.issueLink}
          issueTitle={issue.issueTitle}
          issueDescription={issue.issueDescription}
        />
      ))}
    </div>
  );
};

export default IssueCardsContainer;
