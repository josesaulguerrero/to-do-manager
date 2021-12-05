//libraries and hooks
import { createContext, useState } from "react";
//components
//assets
// initial state
import { initialState } from "../initialState";

export const todosContext = createContext();

export const TodosContextProvider = ({ children }) => {
   const [todos, setTodos] = useState(initialState);
   const addTodo = (newTodo) => {
      // the first thing to do is to create a new state.
      const newState = [
         newTodo,
         ...todos
      ];
      // then we update the todos
      setTodos(newState);
      // and finally the ToDos cached variable is updated.
      window.localStorage.setItem("ToDos", JSON.stringify(newState));
      return;
   };
   const completeTodo = (todoId) => {
      // the first thing is to find the index of the todo that we want to complete.
      const todoIndex = todos.findIndex(todo => todo.ID === todoId);
      // then a new state is created, but the todo with the given index is updated and its "completed" property is set to true.
      const newState = [
         ...todos[todoIndex].completed = true,
         ...todos
      ];
      // later we update the todos state
      setTodos(newState);
      // and finally the variable cached in the local storage is updated with the new value.
      window.localStorage.setItem("ToDos", JSON.stringify(newState));
   };
   const removeTodo = (todoId) => {
      // a new state is created with all the todos that have a different ID to the one given as payload.
      const newState = todos.filter(todo => todo.ID !== todoId);
      // the todos state is updated
      setTodos(newState);
      // later the variable cached in the local storage is updated with the new value.
      window.localStorage.setItem("ToDos", JSON.stringify(newState));
   };
   const getAll = () => {
      return todos;
   };
   const getCompletedOnly = () => {
      // I create a new array with all the todos that have its completed property set to true.
      const completedTodos = todos.filter(todo => todo.completed === true);
      return completedTodos;
   };
   const getActiveOnly = () => {
      // I create a new array with all the todos that have its completed property set to false.
      const activeTodos = todos.filter(todo => todo.completed === false);
      return activeTodos;
   };
   return (
      <todosContext.Provider value={{
         addTodo,
         completeTodo,
         removeTodo,
         getAll,
         getCompletedOnly,
         getActiveOnly
      }}>
         {children}
      </todosContext.Provider>
   );
};