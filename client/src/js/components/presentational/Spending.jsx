import React from "react";

const Spending = ({ expenses, renderRows }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>item</th>
          <th>cost</th>
        </tr>
      </thead>
      <tbody>{renderRows(expenses)}</tbody>
    </table>
  );
};

export default Spending;
