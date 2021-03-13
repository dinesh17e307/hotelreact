import * as actiontypes from "./action";
const initialState = {
  ordernow: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.ORDERNOW:
      return { ...state, ordernow: true };

    default:
      return state;
  }
};
export default reducers;
