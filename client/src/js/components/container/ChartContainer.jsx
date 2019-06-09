import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import FundsChart from "../presentational/charts/FundsChart.jsx";
import PieChart from "../presentational/charts/PieChart.jsx";

const ChartContainer = props => {
  useEffect(() => {
    props.getChartFunds();
    // props.getChartEx;
  }, []);

  return (
    <section className="charts">
      <FundsChart data={props.lineData} />
      <PieChart />
    </section>
  );
};

const mapStateToProps = state => {
  return {
    lineData: state.funds.chartData
  };
};

export default connect(
  mapStateToProps,
  actions
)(ChartContainer);
