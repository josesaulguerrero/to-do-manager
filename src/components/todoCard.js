//libraries and hooks
import { useContext } from "react";
//components
//assets and styled components
import { Card, Checkbox, RemoveButton, Span } from "../assets/styles/TodoCardStyles";
// context
import { todosContext } from "../context/todosContext";


export const TodoCard = ({ content, ID, completed }) => {
   const { removeTodo, toggleCompleteTodo } = useContext(todosContext);
   return (
      <Card>
         <Checkbox
            type="checkbox"
            checked={completed}
            onClick={() => toggleCompleteTodo(ID)}
            readOnly
         />
         <Span>{content}</Span>
         <RemoveButton onClick={() => removeTodo(ID)}></RemoveButton>
      </Card>
   );
};