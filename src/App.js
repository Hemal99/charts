import "./App.css";
import { Grid } from "@mui/material";
import LineChart from "component/Line";
import PieChart from "component/Pie";
import BarChart from "component/Bar";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <LineChart />
      </Grid>

      <Grid item xs={12} md={6}>
        <PieChart />
      </Grid>

      <Grid item xs={12} md={6}>
        <BarChart />
      </Grid>
    </Grid>
  );
}

export default App;
