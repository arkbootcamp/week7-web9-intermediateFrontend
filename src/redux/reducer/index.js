import { combineReducers } from "redux";

import counter from "./counter";
import auth from "./auth";
import movie from "./movie";
import order from "./order";

export default combineReducers({
  counter,
  auth,
  movie,
  order,
});
