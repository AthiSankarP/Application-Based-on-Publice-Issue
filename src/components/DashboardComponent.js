// src/components/DashboardComponent.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, LineElement, PointElement } from 'chart.js';
import AppBarComponent from "./AppBarComponent";
import IssueCard from './IssueCard';

// Register the ChartJS components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement
);

// Function to generate random data for demo purposes
const generateRandomData = () => Math.floor(Math.random() * 100);

const initialIssueData = {
  labels: ['Resolved', 'Pending', 'In Progress'],
  datasets: [{
    label: 'Issue Status',
    data: [generateRandomData(), generateRandomData(), generateRandomData()],
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
  }],
};

const initialCategoryData = {
  labels: ['Technical', 'Administrative', 'Service'],
  datasets: [{
    label: 'Issue Categories',
    data: [generateRandomData(), generateRandomData(), generateRandomData()],
    backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)'],
    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)'],
    borderWidth: 1,
  }],
};

const initialTrendData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Issues Over Time',
    data: [generateRandomData(), generateRandomData(), generateRandomData(), generateRandomData(), generateRandomData(), generateRandomData()],
    borderColor: 'rgba(255, 159, 64, 1)',
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    fill: true,
  }],
};

const animationOptions = {
  animation: {
    duration: 1000,
    easing: 'easeInOutQuad',
  },
};

function DashboardComponent() {
  const [issueChartData, setIssueChartData] = useState(initialIssueData);
  const [categoryChartData, setCategoryChartData] = useState(initialCategoryData);
  const [trendChartData, setTrendChartData] = useState(initialTrendData);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const interval = setInterval(() => {
      setIssueChartData({
        ...initialIssueData,
        datasets: [{
          ...initialIssueData.datasets[0],
          data: [generateRandomData(), generateRandomData(), generateRandomData()],
        }],
      });

      setCategoryChartData({
        ...initialCategoryData,
        datasets: [{
          ...initialCategoryData.datasets[0],
          data: [generateRandomData(), generateRandomData(), generateRandomData()],
        }],
      });

      setTrendChartData({
        ...initialTrendData,
        datasets: [{
          ...initialTrendData.datasets[0],
          data: [generateRandomData(), generateRandomData(), generateRandomData(), generateRandomData(), generateRandomData(), generateRandomData()],
        }],
      });
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="dashboard-container">
      <AppBarComponent />
      
      <div className="dashboard-content">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search issues..."
            className="search-bar"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="all">All Issues</option>
            <option value="resolved">Resolved</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
          </select>
        </div>

        <div className="stats-bars">
          <div className="stats-bar">
            <h3>Issue Status</h3>
            <div className="bar-chart">
              <Bar data={issueChartData} options={{ ...animationOptions, responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="stats-bar">
            <h3>Issue Categories</h3>
            <div className="pie-chart">
              <Pie data={categoryChartData} options={{ ...animationOptions, responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="stats-bar">
            <h3>Issues Over Time</h3>
            <div className="line-chart">
              <Line data={trendChartData} options={{ ...animationOptions, responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        <div className="recent-issues">
          <h3>Recent Issues</h3>
          <IssueCard />
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
