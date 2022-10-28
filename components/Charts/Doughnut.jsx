import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { DoughnutData, DoughnutOptions } from "../../data/dummy";

const DoughnutChart = () => {
  return (
    <div>
      <Doughnut
        data={DoughnutData}
        width="40"
        height="40"
        options={DoughnutOptions}
      />
    </div>
  );
};

export default DoughnutChart;
