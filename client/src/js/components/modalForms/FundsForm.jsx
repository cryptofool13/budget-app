import React, { useState, Fragment } from "react";
import { Field, reduxForm } from "redux-form";

import { isEmpty } from "../../utils";
import FundsInit from "./FundsInit.jsx";

const FundsForm = props => {
  const { accounts, handleSubmit, newFunds, handleAdd, finished, done } = props;

  const onAdd = formProps => {
    let temp = newFunds;
    console.log(formProps, accounts);
    if (formProps.hasOwnProperty("balance") || accounts[0].name in formProps) {
      temp.push(formProps);
    }
    handleAdd(temp);
  };

  const renderPrompts = () => {
    if (isEmpty(accounts) && !finished) {
      return <FundsInit ready={done} onAdd={onAdd} />;
    }
    return accounts.map(account => {
      return (
        <Fragment key={account._id}>
          <fieldset>
            <label>{account.name}</label>
            <Field
              name={account.name}
              autoComplete="none"
              type="number"
              component="input"
            />
          </fieldset>
        </Fragment>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(onAdd)}>
      <h3 className="form-title">Funds</h3>
      {renderPrompts()}

      <button type="submit">Next</button>
    </form>
  );
};

export default reduxForm({ form: "updateFunds" })(FundsForm);
