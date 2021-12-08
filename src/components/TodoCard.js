//libraries and hooks
import React, { useContext } from "react";
import { useMotionValue, Reorder } from "framer-motion";
//components
//assets and styled components
import { Card, Checkbox, RemoveButton, Span } from "../assets/styles/TodoCardStyles";
// context
import { todosContext } from "../context/todosContext";


export const TodoCard = ({ todo }) => {
   const { removeTodo, toggleCompleteTodo } = useContext(todosContext);

   const y = useMotionValue(0);

   return (
      <Reorder.Item
         key={todo.ID}
         value={todo}
         id={todo.ID}
         as="li"
         style={{
            y,
            minWidth: "90%"
         }}
      >
         <Card>
            <Checkbox
               type="checkbox"
               checked={todo.completed}
               onClick={() => toggleCompleteTodo(todo.ID)}
               readOnly
            />
            <Span>{todo.content}</Span>
            <RemoveButton onClick={() => removeTodo(todo.ID)}></RemoveButton>
         </Card>
      </Reorder.Item>
   );
};
