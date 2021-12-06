//libraries and hooks
import { useContext } from "react";
//components
//assets
// context
import { todosContext } from "../context/todosContext";


export const TodoCard = ({ content, ID, completed }) => {
   const { removeTodo, toggleCompleteTodo } = useContext(todosContext);
   return (
      <li>
         <input
            type="checkbox"
            checked={completed}
            onClick={() => toggleCompleteTodo(ID)}
            readOnly
         />
         <span>{content}</span>
         <button onClick={() => removeTodo(ID)}>&#10761;</button>
      </li>
   );
};