import React from "react";

const Accounts = ({ accounts, renderRows }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>account</th>
          <th>balance</th>
        </tr>
      </thead>
      <tbody>{renderRows(accounts)}</tbody>
    </table>
  );
};

export default Accounts;
