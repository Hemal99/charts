import React from "react";
import { Pie } from "react-chartjs-2";
import { chartColors } from "./colors";

const pieOptions = {
  legend: {
    display: false,
    position: "right",
    legendCallback: function (chart) {
      // Return the HTML string here.
      return [
        <ul>
          <li>z</li>
          <li>zzzz</li>
          <li>ppp</li>
          <li>adasda</li>
        </ul>,
      ];
    },
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

const pieData = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["Wash/Dry/Fold", "Dry Cleaning", "Tailoring"],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors,
    },
  ],
};

const styles = {
  pieContainer: {
    width: "40%",
    height: "40%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
  relative: {
    position: "relative",
  },
};

export default function PieChart() {
  return (
    <div className="App">
      <div style={styles.relative}>
        <div style={styles.pieContainer}>
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div id="legend" />
      </div>
    </div>
  );
}
