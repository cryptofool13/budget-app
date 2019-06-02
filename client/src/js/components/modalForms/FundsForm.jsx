import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";

import FundsInit from "./FundsInit.jsx";
import { isEmpty } from "../../utils";

const FundsForm = props => {
  const [isDisabled, setIsDisabled] = useState(false);

  const { accounts, handleSubmit, newFunds, handleAdd } = props;

  const onAdd = formProps => {
    let temp = newFunds;
    temp.push(formProps);
    handleAdd(temp);
    setIsDisabled(true);
  };
  const renderPrompts = () => {
    if (isEmpty(accounts)) {
      return <FundsInit />;
    }
    return accounts.map(account => {
      return (
        <fieldset key={account._id}>
          <label>{account.name}</label>
          <Field
            name={account.name}
            autoComplete="none"
            type="number"
            component="input"
          />
        </fieldset>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(onAdd)}>
      <h3>Funds</h3>
      {renderPrompts()}
      <button type="submit" disabled={isDisabled}>
        Next
      </button>
    </form>
  );
};

export default reduxForm({ form: "updateFunds" })(FundsForm);
