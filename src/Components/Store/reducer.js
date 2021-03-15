import * as actiontypes from "./action";
const initialState = {
  ordernow: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.ORDERNOW:
      return { ...state, ordernow: true };
    case actiontypes.ORDERNOWAFTER:
      return { ...state, ordernow: false };

    default:
      return state;
  }
};
export default reducers;
