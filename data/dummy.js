import React from "react";

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
      borderRadius: 30,
      data: [0.4, 0.3, 0.4, 0.2, 0.6, 0.3, 0.1, 0.7, 0.2],
      backgroundColor: "gray",
      barThickness: 10,
    },
    {
      label: "Pneumonia",
      borderRadius: 20,
      data: [0.1, 0.4, 0.3, 0.2, 0.5, 0.6, 0.7, 0.4, 0.3],
      backgroundColor: "#14B8A6",
      barThickness: 10,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      position: "top",
      align: "start",
      labels: {
        boxWidth: 7,
        usePointStyle: true,
        pointStyle: "circle",
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
    },
  ],
};

export const LineOptions = {
  plugins: {
    legend: {
      display: false,
    },
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
    xAxis: { display: true },
    yAxis: { display: true },
  },
};

// Doughnut starts here

export const DoughnutData = {
  backgroundColor: ["rgb(2,88,255)", "rgb(249,151,0)", "rgb(255,199,0)"],
  labels: ["Malaria", "Pneumonia", "Tuberculosis"],
  datasets: [
    {
      label: "Diseases",
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
