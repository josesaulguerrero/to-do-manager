//libraries and hooks
import { createContext, useEffect, useState } from "react";
//components
//assets
// initial state
import { initialState } from "../initialState";

export const todosContext = createContext();

export const TodosContextProvider = ({ children }) => {
   const [allTodos, setAllTodos] = useState(initialState);
   const [completedTodos, setCompletedTodos] = useState(
      allTodos.filter(todo => todo.completed === true)
   );
   const [activeTodos, setActiveTodos] = useState(
      allTodos.filter(todo => todo.completed === false)
   );

   useEffect(() => {
      setCompletedTodos(allTodos.filter(todo => todo.completed === true));
      setActiveTodos(allTodos.filter(todo => todo.completed === false));
   }, [allTodos]);

   const saveTodosInLocalStorage = (todos) => {
      window.localStorage.setItem("ToDos", JSON.stringify(todos));
   };

   const addTodo = (newTodo) => {
      setAllTodos(prevState => {
         const newState = JSON.parse(JSON.stringify(prevState));
         newState.unshift(newTodo);
         saveTodosInLocalStorage(newState);
         return newState;
      });
   };

   const removeTodo = (todoID) => {
      setAllTodos(prevState => {
         const prevStateCopy = JSON.parse(JSON.stringify(prevState));
         const newState = prevStateCopy.filter(todo => todoID !== todo.ID);
         saveTodosInLocalStorage(newState);
         return newState;
      });
   };

   const toggleCompleteTodo = (todoID) => {
      setAllTodos(prevState => {
         const prevStateCopy = JSON.parse(JSON.stringify(prevState));
         const newState = prevStateCopy
            .map(todo =>
               todo.ID === todoID
                  ? { ...todo, completed: !todo.completed }
                  : todo
            );
         saveTodosInLocalStorage(newState);
         return newState;
      });
   };

   const clearCompletedTodos = () => {
      setAllTodos(prevState => {
         const prevStateCopy = JSON.parse(JSON.stringify(prevState));
         const newState = prevStateCopy.filter(todo => todo.completed !== true);
         saveTodosInLocalStorage(newState);
         return newState;
      });
   };

   const todosUtilities = {
      allTodos,
      setAllTodos,
      completedTodos,
      setCompletedTodos,
      activeTodos,
      setActiveTodos,
      addTodo,
      removeTodo,
      toggleCompleteTodo,
      clearCompletedTodos,
      saveTodosInLocalStorage,
   };

   return (
      <todosContext.Provider value={todosUtilities}>
         {children}
      </todosContext.Provider>
   );
};