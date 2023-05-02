import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  projects: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "projects/fetchSuccess":
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
}

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
