import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import houses from "./houses_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  houses,
});

export default RootReducer;
