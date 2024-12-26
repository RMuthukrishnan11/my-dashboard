import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../../styles/global.css'; 

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const data = {
  labels: ['2022', '2023', '2024'],
  datasets: [
    {
      label: 'Projects Completed',
      data: [0, 2, 3],
      borderColor: '#3498db',
      backgroundColor: 'rgba(52, 152, 219, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Projects Completed Over Time',
    },
  },
};

const Analytics = () => {
  return (
    <div className="container section">
      <div className="analytics">
        <h2>Analytics Dashboard</h2>
        

        <div className="analytics-summary">
          <div className="summary-item">
            <h3>Total Projects</h3>
            <p>2</p>
          </div>
          <div className="summary-item">
            <h3>Skills Acquired</h3>
            <p>9</p>
          </div>
          <div className="summary-item">
            <h3>Years of Experience</h3>
            <p>3</p>
          </div>
        </div>


        <div className="chart-container">
          <h3 className="chart-title">Projects Completed Over Time</h3>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
