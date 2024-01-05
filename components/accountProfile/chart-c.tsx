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

interface Props {
  dataGame: {
    allWrong: number;
    allCorrect: number;
    pankerValue: number;
    tinkerValue: number;
    jankerValue: number;
    hankerValue: number;
  } | null;
}

const ChartLine = ({ dataGame }: Props) => {
  if (!dataGame) {
    return <div>Data not available</div>;
  }
  const data = {
    labels: [],
    datasets: [
      {
        data: dataGame,
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
  return <Line data={data} options={options} />;
};

export default ChartLine;
