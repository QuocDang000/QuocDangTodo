import { combineReducers } from "redux";
import TaskReducer from "./reducer"; 

const rootReducer = combineReducers({
  task: TaskReducer,
});
export default rootReducer;
