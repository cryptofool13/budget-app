import { EXPENSE_TABLE, DATA_ERROR } from "../actions/types";

const INIT_STATE = {
  tableData: [],
  chartData: [],
  errorMessage: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EXPENSE_TABLE:
      return { ...state, tableData: action.payload };
    case DATA_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
