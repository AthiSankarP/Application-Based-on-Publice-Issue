// src/components/DashboardComponent.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
import AppBarComponent from "./AppBarComponent"; // Import AppBar component

// Register the ChartJS components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

// Sample data for charts
const issueData = {
  labels: ['Resolved', 'Pending', 'In Progress'],
  datasets: [{
    label: 'Issue Status',
    data: [12, 19, 3], // Example data
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1,
  }],
};

const categoryData = {
  labels: ['Technical', 'Administrative', 'Service'],
  datasets: [{
    label: 'Issue Categories',
    data: [25, 15, 30], // Example data
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
    borderWidth: 1,
  }],
};

function DashboardComponent() {
  return (
    <div className="dashboard-container">
      <AppBarComponent /> {/* Only AppBar component is included */}
      
      <div className="dashboard-content">
        <div className="stats-bars">
          <div className="stats-bar">
            <h3>Issue Status</h3>
            <div className="bar-chart">
              <Bar data={issueData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="stats-bar">
            <h3>Issue Categories</h3>
            <div className="pie-chart">
              <Pie data={categoryData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
        
        <div className="recent-issues">
          <h3>Recent Issues</h3>
          <div className="issue-list">
            <div className="issue-item">
              <img src="path/to/photo1.jpg" alt="Issue 1" />
              <div className="issue-details">
                <Link to="/issue/1">Issue 1</Link>
                <p>Short description of the issue...</p>
              </div>
            </div>
            <div className="issue-item">
              <img src="path/to/photo2.jpg" alt="Issue 2" />
              <div className="issue-details">
                <Link to="/issue/2">Issue 2</Link>
                <p>Short description of the issue...</p>
              </div>
            </div>
            {/* Add more issues here */}
          </div>
        </div>
        
        <div className="notifications">
          <h3>Notifications</h3>
          <p>No new notifications</p>
        </div>
        
        <div className="dashboard-links">
          <Link to="/issues" className="dashboard-link">View All Issues</Link>
          <Link to="/report" className="dashboard-link">Report an Issue</Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
