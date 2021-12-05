// libraries
import { combineReducers } from "redux";
// reducers
import { reducers as todoReducers } from "./reducers";

export const combinedReducers = () => {
   return combineReducers({
      todos: todoReducers,
   });
};


