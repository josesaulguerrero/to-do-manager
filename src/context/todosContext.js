//libraries and hooks
import { createContext, useState } from "react";
//components
//assets
// initial state
import { initialState } from "../initialState";

export const todosContext = createContext();

export const TodosContextProvider = ({ children }) => {
   const [todos, setTodos] = useState(initialState);

   const saveTodosInLocalStorage = (todos) => {
      window.localStorage.setItem("ToDos", JSON.stringify(todos));
   };

   const addTodo = (newTodo) => {
      setTodos(prevState => {
         // the first thing to do is to create a new state.
         const newState = [
            newTodo,
            ...prevState
         ];
         // then the cached variable is updated.
         saveTodosInLocalStorage(newState);
         // and finally, I set my state's new value.
         return newState;
      });
   };

   const removeTodo = (todoId) => {
      setTodos(prevState => {
         // I don't want to modify the original state, so I create a copy of it.
         const todosCopy = JSON.parse(JSON.stringify(prevState));
         // then a new state is created without the to-do that matches the given Id.
         const newState = todosCopy.filter(todo => todo.ID !== todoId);
         // and finally, the cached variable is updated as well.
         saveTodosInLocalStorage(newState);
         return newState;
      });
   };

   const toggleCompleteTodo = (todoId) => {
      setTodos(prevState => {
         // I don't want to modify the original state, so I create a copy of it.
         const todosCopy = JSON.parse(JSON.stringify(prevState));
         // then I update the to-do that matches the ID given as parameter
         const newState = todosCopy.map(todo =>
            todo.ID === todoId
               ? { ...todo, completed: !todo.completed }
               : todo
         );
         // and finally, the cached variable is updated as well.
         saveTodosInLocalStorage(newState);
         return newState;
      });
   };

   return (
      <todosContext.Provider value={{
         addTodo,
         toggleCompleteTodo,
         removeTodo,
         saveTodosInLocalStorage,
         todos,
         setTodos
      }}>
         {children}
      </todosContext.Provider>
   );
};