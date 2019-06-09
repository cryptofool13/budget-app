import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";

import FundsInit from "./FundsInit.jsx";

const FundsForm = props => {
  const [isDisabled, setIsDisabled] = useState(false);

  const { accounts, handleSubmit, newFunds, handleAdd, finished, done } = props;

  const onAdd = formProps => {
    let temp = newFunds;
    if (formProps.hasOwnProperty("balance")) temp.push(formProps);
    handleAdd(temp);
  };
  const renderPrompts = () => {
    if (!finished) {
      return <FundsInit ready={done} onAdd={onAdd} />;
    }
    return accounts.map(account => {
      return (
        <>
          <fieldset key={account._id}>
            <label>{account.name}</label>
            <Field
              name={account.name}
              autoComplete="none"
              type="number"
              component="input"
            />
          </fieldset>
          <button type="submit" disabled={isDisabled}>
            Next
          </button>
        </>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(onAdd)}>
      <h3>Funds</h3>
      {renderPrompts()}
    </form>
  );
};

export default reduxForm({ form: "updateFunds" })(FundsForm);
