import { createStore, combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import appStartReducer from "../reducers/appStartReducer";

const rootReducer = combineReducers({
  loginReducer,
  app: appStartReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
