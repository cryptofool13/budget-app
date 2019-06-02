import React, { useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Modal from "../presentational/Modal.jsx";
import FundsForm from "../modalForms/FundsForm.jsx";
import ExpenseForm from "../modalForms/ExpenseForm.jsx";

const ModalContainer = props => {
  const [newFunds, setNewFunds] = useState([]);
  const [newItems, setNewItems] = useState([]);
  const [show, setShow] = useState(false);

  const hideModal = () => {
    setShow(false);
  };
  const showModal = () => {
    setShow(true);
  };

  const handleSubmit = () => {
    if (!props.funds[0]) {
      props.seedFunds(newFunds);
    }
    props.addFunds(newFunds[0]);
    props.queueExpenseData(newItems);
    // props.history.go("/home");
  };

  return (
    <section>
      <Modal show={show} handleClose={hideModal}>
        <FundsForm
          newFunds={newFunds}
          handleAdd={setNewFunds}
          accounts={props.funds}
        />
        <ExpenseForm
          newItems={newItems}
          handleAdd={setNewItems}
          expenses={props.expenses}
        />
        <button onClick={handleSubmit}>Submit</button>
      </Modal>
      <button onClick={() => showModal()}>Update Data</button>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage,
    funds: state.funds.tableData,
    newFunds: state.form.updateFunds,
    expenses: state.expenses.tableData
  };
};

export default connect(
  mapStateToProps,
  actions
)(ModalContainer);
