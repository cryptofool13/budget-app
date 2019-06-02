import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Accounts from "../presentational/Accounts.jsx";
import Spending from "../presentational/Spending.jsx";
import * as actions from "../../actions";

const TabelContainer = props => {
  const [funds, setFunds] = useState([]);
  useEffect(() => setFunds(fetchfunds()), [funds]);

  const [expenses, setExpenses] = useState([]);
  useEffect(() => setExpenses(fetchExpenses()), [expenses]);

  const fetchfunds = () => {
    props.getTableFunds();
  };

  const fetchExpenses = () => {
    props.getTableExpenses();
  };

  const renderRows = data => {
    if (props.fundsError) {
      return (
        <tr>
          <th>{props.fundsError}</th>
        </tr>
      );
    }
    if (!data[0]) {
      return (
        <tr>
          <th>loading...</th>
        </tr>
      );
    }

    return data.map(item => {
      return (
        <tr key={item._id}>
          <td>{item.name || item.label}</td>
          <td>{item.balance || item.cost}</td>
        </tr>
      );
    });
  };

  return (
    <section className="tables">
      <Accounts renderRows={renderRows} accounts={props.funds} />
      <Spending renderRows={renderRows} expenses={props.expenses} />
    </section>
  );
};

const mapStateToProps = state => {
  return {
    funds: state.funds.tableData,
    expenses: state.expenses.tableData,
    fundsError: state.funds.errorMessage
  };
};

export default connect(
  mapStateToProps,
  actions
)(TabelContainer);
