import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  // Define chart options and data
  const chartOptions = {
    labels: ['Basic Tees', 'Custom short pants', 'Super Hoodies'], // Labels for each slice of the pie chart
    colors: ['#FF4560', '#008FFB', '#00E396'], // Colors for each slice
    legend: {
      show: true, // Show/hide legend
      position: 'bottom' // Legend position
    }
  };

  const chartData = [44, 55, 41]; // Data for each slice

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartData}
        type="pie"
        width="300"
      />
    </div>
  );
};


export default PieChart
