// actionTypes
import { actionTypes } from "../actions/actionTypes";
// initialState
import { initialState as INITIAL_STATE } from "../initialState";

export const reducers = (state = INITIAL_STATE, action) => {
   const { type, payload } = action;
   switch (type) {
      case actionTypes.addTodo: {
         // the first thing to get done is to create a new Todo with the given payload.
         const newTodo = { ...payload };
         // then a new state is created
         const newState = [
            newTodo,
            ...state
         ];
         // and finally the ToDos cached variable is updated.
         JSON.stringify(window.localStorage.setItem("ToDos", newState));
         return newState;
      }
      case actionTypes.completeTodo: {
         // the first thing is to find the index of the todo that we want to complete.
         const todoIndex = state.findIndex(todo => todo.ID === payload);
         // then a new state is created, but the todo with the given index is updated and its "completed" property is set to true.
         const newState = [
            ...state[todoIndex].completed = true,
            ...state
         ];
         // later the variable cached in the local storage is updated with the new value.
         JSON.stringify(window.localStorage.setItem("ToDos", newState));
         return newState;
      }
      case actionTypes.removeTodo: {
         // a new state is created with all the todos that have a different ID to the one given as payload.
         const newState = state.filter(todo => todo.ID !== payload);
         // the new state is returned
         return newState;
      }
      case actionTypes.getAll:
         return [...state];
      case actionTypes.getCompletedOnly: {
         // I create a new array with all the todos that have its completed property set to true.
         const completedTodos = state.filter(todo => todo.completed === true);
         return completedTodos;
      }
      case actionTypes.getActiveOnly: {
         // I create a new array with all the todos that have its completed property set to false.
         const activeTodos = state.filter(todo => todo.completed === false);
         return activeTodos;
      }
      default:
         // if none of the cases matches, then I'll just return the state.
         return state;
   }
};