import { createStore, combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import appStartReducer from "../reducers/appStartReducer";
import weatherReducer from "../reducers/weatherReducer";
import startAppReducer from "../reducers/startAppReducer";

const rootReducer = combineReducers({
  loginReducer,
  app: appStartReducer,
  weather: weatherReducer,
  start: startAppReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
