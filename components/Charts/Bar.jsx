import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { BarData, options } from "../../data/dummy";
const BarChart = () => {
  return (
    <div>
      <Bar data={BarData} width="300" height="350" options={options} />
    </div>
  );
};

export default BarChart;
