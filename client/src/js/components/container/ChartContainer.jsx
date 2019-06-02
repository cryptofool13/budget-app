import React from "react";

import LineChart from "../presentational/charts/LineChart.jsx";
import PieChart from "../presentational/charts/PieChart.jsx";

const ChartContainer = () => {
  let data = []; // change to chart data from redux store
  return (
    <section className="charts">
      <LineChart data={data} />
      <PieChart data={data} />
    </section>
  );
};

export default ChartContainer;
