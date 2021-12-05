// actionTypes
import { actionTypes } from "./actionTypes";

export const removeTodo = (todoId) => {
   return {
      type: actionTypes.removeTodo,
      payload: todoId
   };
};