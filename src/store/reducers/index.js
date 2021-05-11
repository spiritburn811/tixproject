import { combineReducers } from "redux";
import movieReducer from "./../reducers/reducerMovie";

const rootReducer = combineReducers({
  movieReducer,
});

export default rootReducer;
