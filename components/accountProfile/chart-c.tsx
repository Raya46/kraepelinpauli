"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartLine = () => {
  const data = {
    labels: ["january", "february", "march", "april", "may", "june"],
    datasets: [
      {
        data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.5,
        borderWidth: 2,
        borderColor: "rgba(47,97,68,1)",
        fill: "start",
        backgroundColor: "rgba(47,97,68,0.3)",
      },
      point: {
        radius: 10,
        hitRadius: 10,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
  };
  return (
    <div>
      <Line className="w-full h-full" data={data} options={options} />
    </div>
  );
};

export default ChartLine;
