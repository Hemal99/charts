import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  datasets: [
    {
      label: "Sales",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(131,138,133,0.4)",
      borderColor: "rgba(131,138,133,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(131,138,133,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(131,138,133,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [100, 80, 130, 125, 150, 200, 190, 210, 170, 190, 220, 200]
    },
   
  ]
};

const options = {
  title: {
    display: true,
    text: "Visit with & without Seasonal Impacts",
    fontSize: 20
  },
  legend: {
    display: true,
    position: "bottom"
  },
  scales: {
    yAxes: [
      {
        ticks: {
          callback: function(value, index, values) {
            return value + "K";
          }
        }
      }
    ]
  }
};



export default function LineChart() {
  return <Line data={data} options={options} />;
}
