import React from "react";
import { Field, reduxForm } from "redux-form";

import { isEmpty } from "../../utils";

const ExpenseForm = props => {
  const { handleSubmit, newItems, handleAdd } = props;

  const onSubmit = () => {
    console.log(newItems);
  };
  const onAdd = formProps => {
    let temp = newItems;
    temp.push(formProps);
    handleAdd(temp);
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit(onAdd)}>
      <h3>Expenses</h3>
      <fieldset>
        <label>Label</label>
        <Field name="label" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label>Cost</label>
        <Field name="cost" type="number" component="input" />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default reduxForm({ form: "updateExpenses" })(ExpenseForm);
