//libraries and hooks
import { useContext } from "react";
import { Reorder } from "framer-motion";
//components
import { TodoCard } from "../components/TodoCard";
//assets and styled components
import { Section } from "../assets/styles/ListStyles";
// context
import { todosContext } from "../context/todosContext";

export const ActiveTodos = () => {
   const { activeTodos, setActiveTodos, } = useContext(todosContext);

   const onReorder = (stateWithReOrderedToDos) => {
      setActiveTodos(stateWithReOrderedToDos);
   };

   return (
      <Reorder.Group
         axis="y"
         onReorder={onReorder}
         values={activeTodos}
         layoutScroll
         className="TodoList"
         as="ul"
      >
         {
            activeTodos.map((todo) =>
               <TodoCard
                  todo={todo}
                  key={todo.ID}
               />
            )
         }
      </Reorder.Group>
   );
};