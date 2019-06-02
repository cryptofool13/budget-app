import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from "../../actions";
import "../../../styles/form.scss";

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push("/home");
    });
  };
  componentDidMount() {
    this.props.resetAuthError();
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <main>
        <section className="form">
          <div className="form-header">Sign Up Today</div>

          <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset className="email">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                autoComplete="off"
                type="text"
                component="input"
              />
            </fieldset>
            <fieldset className="password">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                autoComplete="off"
                type="password"
                component="input"
              />
            </fieldset>
            <div className="error">{this.props.errorMessage}</div>
            <button
              type="submit"
              style={{
                backgroundColor: this.props.errorMessage ? "#b21314a0" : "#5aa",
                color: this.props.errorMessage ? "#ede" : "#666"
              }}
              className="btn"
            >
              Sign Up
            </button>
          </form>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signup" })
)(Signup);
