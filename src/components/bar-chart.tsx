import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

import { Bar } from "react-chartjs-2";
export const WeekBarchart = () => {
  const data = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "764",
        data: [20, 15, 32, 18, 25, 10, 20],
        backgroundColor: ["#876AFE", "#FFBC02"],

        barPercentage: 0.5,
        categoryPercentage: 0.5,
        borderRadius: 20,
        width: 20,
      },
    ],
  };

  const options = {
    responsiveness: true,
    maintainAspectRatio: false,

    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        display: false,
      },
    },
  };

  return (
    <div>
      <div className="bar w-full h-[100px]">
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
};
