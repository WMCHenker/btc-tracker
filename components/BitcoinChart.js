import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Bitcoin"
    }
  }
};


const labels = [];

for (let i = 0; i <= 100; i++) {
  if(i % 2 === 0){
    labels.push(i);
  }
}

export function BitcoinChart( {apiData} ) {
  const data = {
    labels,
    datasets: [
      {
        label: "Bitcoin",
        data: labels.map((val, i) => {
          return apiData[i]?.current_value
        }),
        borderColor: "#5B79FF",
        backgroundColor: "#0025CC",
        tension: 0.4
      }
    ]
  };
  
  return <div className="max-w-6xl"><Line options={options} data={data} /></div>;
}
