import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // my middlware
    // console.log("ACTION", action);
    next(action);
  };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
