// src/components/AppBarComponent.js
import React, { useState } from 'react';
import { districts, places, issueTypes } from '../data/tamilNaduData';

import "../styles/AppBar.css";
import tamilNaduData from './../data/tamilNaduData';

function AppBarComponent() {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const [selectedIssueType, setSelectedIssueType] = useState('');
  const { districts, places, issueTypes } = tamilNaduData;

  return (
    <header className="appbar-header">
      <div className="appbar-logo">
        <h1>Public Issue Tracker</h1>
      </div>
      <div className="appbar-dropdowns">
        <select
          value={selectedDistrict}
          onChange={(e) => {
            setSelectedDistrict(e.target.value);
            setSelectedPlace('');
          }}
        >
          <option value="">Select District</option>
          {districts.map((district) => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>

        <select
          value={selectedPlace}
          onChange={(e) => setSelectedPlace(e.target.value)}
          disabled={!selectedDistrict}
        >
          <option value="">Select Place</option>
          {selectedDistrict && places[selectedDistrict]?.map((place) => (
            <option key={place} value={place}>{place}</option>
          ))}
        </select>

        <select
          value={selectedIssueType}
          onChange={(e) => setSelectedIssueType(e.target.value)}
        >
          <option value="">Select Issue Type</option>
          {issueTypes.map((issueType) => (
            <option key={issueType} value={issueType}>{issueType}</option>
          ))}
        </select>
      </div>
      <div className="user-info">
        <span>Welcome, User</span>
        <button className="btn-join">Join Us</button>
      </div>
    </header>
  );
}

export default AppBarComponent;
