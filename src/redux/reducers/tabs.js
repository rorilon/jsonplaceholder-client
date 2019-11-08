import { SELECT_TAB } from "../actions/types";

const initialState = {
  selected: "posts"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_TAB:
      return { ...state, selected: action.tab };
    default:
      return state;
  }
}
