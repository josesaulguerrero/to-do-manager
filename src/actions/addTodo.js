// actionTypes
import { actionTypes } from "./actionTypes";

export const addTodo = (todo) => {
   return {
      type: actionTypes.addTodo,
      payload: todo,
   };
};