import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Chart = ({ chartId, chartType, labels, data, bgColor, borderColor }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: chartType === "bar" ? "Expenses" : "Policies",
        data,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: chartType === "bar" ? "Monthly Expenses" : "Policy Distribution",
      },
    },
  };

  return (
    <div className="w-full h-80">
      {chartType === "bar" ? (
        <Bar id={chartId} data={chartData} options={options} />
      ) : (
        <Pie id={chartId} data={chartData} options={options} />
      )}
    </div>
  );
};

export default Chart;
