//libraries and hooks
import { createContext, useState, useReducer } from "react";
//components
//assets
// reducers
import { todosReducers } from "../reducers/index";
// initial state
import { initialState } from "../initialState";

export const todosContext = createContext();

export const TodosContextProvider = ({ children }) => {
   const [todos, dispatcher] = useReducer(todosReducers, initialState);
   return (
      <todosContext.Provider value={{
         todos,
         dispatcher
      }}>
         {children}
      </todosContext.Provider>
   );
};