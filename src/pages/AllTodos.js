//libraries and hooks
import { useContext } from "react";
import { Reorder } from "framer-motion";
//components
import { TodoCard } from "../components/todoCard";
//assets and styled components
// context
import { todosContext } from "../context/todosContext";

export const AllTodos = () => {
   const { todos, setTodos, saveTodosInLocalStorage } = useContext(todosContext);

   const onReorder = (stateWithReOrderedToDos) => {
      setTodos(stateWithReOrderedToDos);
      saveTodosInLocalStorage(stateWithReOrderedToDos);
   };

   return (
      <Reorder.Group
         axis="y"
         onReorder={onReorder}
         values={todos}
         layoutScroll
         as="ul"
      >
         {
            todos.map((todo) =>
               <TodoCard
                  todo={todo}
                  key={todo.ID}
               />
            )
         }
      </Reorder.Group>
   );
};