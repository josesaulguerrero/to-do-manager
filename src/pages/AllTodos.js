//libraries and hooks
import { useContext } from "react";
import { Reorder } from "framer-motion";
//components
import { TodoCard } from "../components/TodoCard";
//assets and styled components
// context
import { todosContext } from "../context/todosContext";

export const AllTodos = () => {
   const { allTodos, setAllTodos, saveTodosInLocalStorage } = useContext(todosContext);

   const onReorder = (stateWithReOrderedToDos) => {
      setAllTodos(stateWithReOrderedToDos);
      saveTodosInLocalStorage(stateWithReOrderedToDos);
   };

   return (
      <Reorder.Group
         axis="y"
         onReorder={onReorder}
         values={allTodos}
         layoutScroll
         className="TodoList"
         as="ul"
      >
         {
            allTodos.map((todo) =>
               <TodoCard
                  todo={todo}
                  key={todo.ID}
               />
            )
         }
      </Reorder.Group>
   );
};