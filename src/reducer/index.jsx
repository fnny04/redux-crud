import { combineReducers } from "redux";
import todos from "./todo";
import visibilityFilter from "./visibiltyFilter";

export default combineReducers({
  todos,
  visibilityFilter,
});
