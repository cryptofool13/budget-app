import React from "react";
import { Field, reduxForm } from "redux-form";

const FundsInit = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <h3>Start by entering your funds info</h3>
      <fieldset>
        <label htmlFor="name">Name</label>
        <Field
          name="name"
          autoComplete="off"
          component="input"
          placeholder="ex: Checking"
          type="text"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="balance">Balance</label>
        <Field name="balance" component="input" type="number" />
      </fieldset>
    </div>
  );
};

export default reduxForm({ form: "fundsInit" })(FundsInit);
