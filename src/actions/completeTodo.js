// actionTypes
import { actionTypes } from "./actionTypes";

export const completeTodo = (todoId) => {
   return {
      type: actionTypes.completeTodo,
      payload: todoId
   };
};