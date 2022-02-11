import React from "react";
import { chartColors } from "./colors";

import { Bar } from "react-chartjs-2";

const newData =[65, 59, 80, 81, 56, 55, 40]

export default function BarChart() {
  const dataBar = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: newData,
      },
    ],
  };

  return (
    <div>
      <h2>Bar Examplee (custom size)</h2>
      <Bar data={dataBar} width={100} height={50} />
    </div>
  );
}
