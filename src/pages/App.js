//libraries and hooks
import { useContext } from "react";
//components
// context
import { todosContext } from "../context/todosContext";
// actions
import { addTodo } from "../actions/addTodo";
//assets and styled components
import { GlobalStyle } from "../assets/styles/GlobalStyles";

export const App = () => {
   const { todos, dispatcher } = useContext(todosContext);
   const onClick = () => {
      dispatcher(addTodo({
         content: "redux",
         ID: 3,
         completed: false
      }));
      return;
   };
   console.log(todos);
   return (
      <div className="App">
         <GlobalStyle theme="light" />
         <button onClick={onClick} >Click!</button>
      </div>
   );
};