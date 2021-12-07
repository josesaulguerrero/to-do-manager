//libraries and hooks
import { useContext } from "react";
import { useMotionValue, Reorder } from "framer-motion";
//components
//assets and styled components
import { Checkbox, RemoveButton, Span } from "../assets/styles/TodoCardStyles";
// context
import { todosContext } from "../context/todosContext";


export const TodoCard = ({ todo }) => {
   const { removeTodo, toggleCompleteTodo } = useContext(todosContext);

   const y = useMotionValue(0);
   const styles = {
      y,
      minWidth: "90%",
      width: "100%",
      maxWidth: "450px",
      height: "40px",
      display: "grid",
      gridTemplate: "100% / 30px 1fr 30px",
      gridTemplateAreas: '"checkbox content button"',
      alignItems: "center",
      padding: "5px 20px",
      borderBottom: "1px solid var(--lightGrayishBlue)",
      listStyle: "none",
   };

   return (
      <Reorder.Item
         key={todo.ID}
         value={todo}
         id={todo.ID}
         style={styles}
         as="li"
      >
         <Checkbox
            type="checkbox"
            checked={todo.completed}
            onClick={() => toggleCompleteTodo(todo.ID)}
            readOnly
         />
         <Span>{todo.content}</Span>
         <RemoveButton onClick={() => removeTodo(todo.ID)}></RemoveButton>
      </Reorder.Item>
   );
};