import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { LineData, LineOptions } from "../../data/dummy";

const LineChart = () => {
  return (
    <div>
      <Line data={LineData} width="300" height="200" options={LineOptions} />
    </div>
  );
};

export default LineChart;
