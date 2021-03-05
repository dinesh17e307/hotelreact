import * as actiontypes from "./action";
const initialstate = {};
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.ADDINGREDIENT:
      return { ...state };
    case actiontypes.REMOVEINGREDIENT:
      return {
        ...state,
      };

    default:
      return state;
  }
};
