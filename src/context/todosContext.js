//libraries and hooks
import { createContext, useState } from "react";
//components
//assets
// initial state
import { initialState } from "../initialState";

export const todosContext = createContext();

export const TodosContextProvider = ({ children }) => {
   const [allTodos, setAllTodos] = useState(initialState);

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

   const getActiveTodos = () => {
      const activeTodos = allTodos.filter(todo => todo.completed === false);
      return activeTodos;
   };

   const getCompletedTodos = () => {
      const completedTodos = allTodos.filter(todo => todo.completed === true);
      return completedTodos;
   };

   const todosUtilities = {
      allTodos,
      setAllTodos,
      addTodo,
      removeTodo,
      toggleCompleteTodo,
      saveTodosInLocalStorage,
      getActiveTodos,
      getCompletedTodos
   };

   return (
      <todosContext.Provider value={todosUtilities}>
         {children}
      </todosContext.Provider>
   );
};