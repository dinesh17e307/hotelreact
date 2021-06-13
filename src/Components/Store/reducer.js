import * as actiontypes from "./action";
const initialState = {
  ordernow: false,
  islogin: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.ORDERNOW:
      return { ...state, ordernow: true };
    case actiontypes.ORDERNOWAFTER:
      return { ...state, ordernow: false };
    case actiontypes.LOGIN:
      return { ...state, islogin: true };
    case actiontypes.AFTERLOGIN:
      return { ...state, islogin: false };

    default:
      return state;
  }
};
export default reducers;
