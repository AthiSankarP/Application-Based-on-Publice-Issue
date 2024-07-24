import React, { useState, useEffect } from 'react';
import AppBarComponent from './AppBarComponent';
import IssueCardsContainer from './IssueCardsContainer';
import NotificationTicker from './NotificationTicker';
import "../styles/Dashboard.css";
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, LineElement, PointElement } from 'chart.js';

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

function DashboardComponent() {
  const [filter, setFilter] = useState('all');
  const [issueChartData, setIssueChartData] = useState(initialIssueData);
  const [categoryChartData, setCategoryChartData] = useState(initialCategoryData);
  const [trendChartData, setTrendChartData] = useState(initialTrendData);
  const [animationDuration, setAnimationDuration] = useState(2000); // Animation duration state

  useEffect(() => {
    const interval = setInterval(() => {
      setIssueChartData({
        labels: initialIssueData.labels,
        datasets: [{
          ...initialIssueData.datasets[0],
          data: [generateRandomData(), generateRandomData(), generateRandomData()],
        }],
      });
  
      setCategoryChartData({
        labels: initialCategoryData.labels,
        datasets: [{
          ...initialCategoryData.datasets[0],
          data: [generateRandomData(), generateRandomData(), generateRandomData()],
        }],
      });
  
      setTrendChartData({
        labels: initialTrendData.labels,
        datasets: [{
          ...initialTrendData.datasets[0],
          data: [generateRandomData(), generateRandomData(), generateRandomData(), generateRandomData(), generateRandomData(), generateRandomData()],
        }],
      });
    }, 10000);
  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDuration(0); // Disable animation after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const chartOptions = {
    animation: {
      duration: animationDuration, // Control animation duration based on state
      easing: 'easeInOutQuad',
    },
    responsive: true,
    maintainAspectRatio: false,
  };

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
              <Bar data={issueChartData} options={chartOptions} />
            </div>
          </div>
          <div className="stats-bar">
            <h3>Issue Categories</h3>
            <div className="pie-chart">
              <Pie data={categoryChartData} options={chartOptions} />
            </div>
          </div>
          <div className="stats-bar">
            <h3>Issues Over Time</h3>
            <div className="line-chart">
              <Line data={trendChartData} options={chartOptions} />
            </div>
          </div>
        </div>

        <div className="issue-cards-section">
          <h3>Issue Types</h3>
          <IssueCardsContainer />
        </div>
        
        <NotificationTicker />

        <div className="dashboard-links">
          <a href="/issues" className="dashboard-link">View All Issues</a>
          <a href="/report" className="dashboard-link">Report an Issue</a>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
