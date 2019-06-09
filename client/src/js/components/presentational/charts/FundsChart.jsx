import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

function formatData(data) {
  return data.map(item => {
    return {
      timestamp: new Date(item.timestamp).getDay(),
      val: item.accounts[0].balance
    };
  });
}

const FundsChart = props => {
  return (
    <div className="line">
      <LineChart
        width={500}
        height={300}
        data={formatData(props.data)}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="val" stroke="#8884d8" />
        <Line type='monotone' dataK
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="timestamp" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default FundsChart;
