import React from "react";
import { chartColors } from "./colors";

import { Bar } from "react-chartjs-2";

function randomNumber () {
  return Math.floor(Math.random() * (100 - 2 + 1)) + 2;
}

const dataset = [
  {
    month: "Jan",
    sales: randomNumber(),
  },
  {
    month: "Feb",
    sales: randomNumber(),
  },
  {
    month: "Mar",
    sales: randomNumber(),
  },
  {
    month: "Apr",
    sales: randomNumber(),
  },
  {
    month: "May",
    sales: randomNumber(),
  },
  {
    month: "Jun",
    sales: randomNumber(),
  },
  {
    month: "Jul",
    sales: randomNumber(),
  },
];

export default function BarChart() {
    

  const dataBar = {
    labels: (dataset.map(item => item.month)),
    datasets: [
      {
        label: "Sales",
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 0.5,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: (dataset.map(item => item.sales)),
      },
    ],
  };

  return (
    <div>
      <h2>Sales</h2>
      {JSON.stringify(dataset)}
      <Bar data={dataBar} width={100} height={50} />
    </div>
  );
}
