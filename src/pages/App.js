//libraries and hooks
import { useContext } from "react";
//components
//assets and styled components
import { GlobalStyle } from "../assets/styles/GlobalStyles";
// context
import { todosContext } from "../context/todosContext";

export const App = () => {
   const { getAll, addTodo } = useContext(todosContext);
   console.log(getAll());
   const onClick = () => {
      addTodo({
         content: "new todo"
      });
   };
   return (
      <div className="App">
         <button onClick={onClick}>click</button>
         <GlobalStyle theme="light" />
      </div>
   );
};