import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";

export default function LineChart() {
  const data1 = [100, 80, 130, 125, 150, 200, 190, 210, 170, 190, 220, 200];

  const data2 = [120, 100, 180, 200, 150, 200, 400, 300, 170, 700, 220, 200];

  const [filteredData, setFilteredData] = useState(data1);

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
      "Dec",
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
        data: filteredData,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Visit with & without Seasonal Impacts",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "bottom",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value, index, values) {
              return value + "K";
            },
          },
        },
      ],
    },
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    if (event.target.value === 10) {
      setFilteredData(data1);
    }
    if (event.target.value === 20) {
      setFilteredData(data2);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Line data={data} options={options} />
      </Grid>
      <Grid item xs={12} md={12}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}
