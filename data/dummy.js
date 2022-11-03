import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const BarData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Malaria",
      data: [0.4, 0.3, 0.4, 0.2, 0.6, 0.3, 0.1, 0.7, 0.2],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Pneumonia",
      data: [0.1, 0.4, 0.3, 0.2, 0.5, 0.6, 0.7, 0.4, 0.3],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top",
      align: "center",
      labels: {
        boxWidth: 10,
        usePointStyle: true,
        pointStyle: "circl",
      },
      title: {
        text: "Patients Report",
        display: true,
        color: "#000",
        font: {
          size: 18,
        },
      },
    },
  },
  scales: {
    xAxis: { display: true },
    yAxis: { max: 1.5 },
  },
  elements: {
    bar: {
      barPercentage: 0.3,
      categoryPercentage: 1,
    },
  },
};
// End of bar chart

export const LineData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      data: [0.1, 0.4, 0.3, 0.2, 0.5, 0.6, 0.7, 0.4, 0.3],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      data: [0.0, 0.6, 0.1, 0.4, 0.2, 0.5, 0.7, 0.2, 0.6],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      xAxisID: "x",
    },
  ],
};

export const LineOptions = {
  plugins: {
    title: {
      display: true,
      text: "Line Chart",
      font: {},
    },
    legend: {
      display: false,
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  elements: {
    line: {
      tensions: 0,
      borderWidth: 2,
      borderColor: "rgba(47,97,68,1)",
      backgroundColor: "rgba(47,97,68, 0.5)",
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    xAxis: { display: true, position: "left" },
    yAxis: {
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

// Doughnut starts here

export const DoughnutData = {
  backgroundColor: ["rgb(2,88,255)", "rgb(249,151,0)", "rgb(255,199,0)"],
  labels: ["Neutral", "Good", "Excellent"],
  datasets: [
    {
      label: "Patient satisfaction",
      data: [100, 50, 200],
      backgroundColor: ["rgb(2,88,255)", "rgb(249,151,0)", "rgb(255,199,0)"],
      hoverOffset: 4,
    },
  ],
};

export const DoughnutOptions = {
  elements: {
    arc: { weight: 0.5, borderWidth: 2 },
  },
  cutout: 40,
};
