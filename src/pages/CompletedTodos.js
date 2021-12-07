//libraries and hooks
import { useContext } from "react";
import { Reorder } from "framer-motion";
//components
import { TodoCard } from "../components/TodoCard";
//assets and styled components
// context
import { todosContext } from "../context/todosContext";

export const CompletedTodos = () => {
   const { completedTodos, setCompletedTodos, } = useContext(todosContext);

   const onReorder = (stateWithReOrderedToDos) => {
      setCompletedTodos(stateWithReOrderedToDos);
   };

   return (
      <Reorder.Group
         axis="y"
         onReorder={onReorder}
         values={completedTodos}
         layoutScroll
         className="TodoList"
         as="ul"
      >
         {
            completedTodos.map((todo) =>
               <TodoCard
                  todo={todo}
                  key={todo.ID}
               />
            )
         }
      </Reorder.Group>
   );
};