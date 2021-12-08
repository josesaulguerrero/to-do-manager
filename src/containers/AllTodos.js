//libraries and hooks
import React, { useContext } from "react";
// import { Reorder } from "framer-motion";
//components
import { TodoCard } from "@components/TodoCard";
// import { TodoCard } from "../components/TodoCard";
import { Placeholder } from "../components/Placeholder";
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
      // <Reorder.Group
      //    axis="y"
      //    onReorder={onReorder}
      //    values={allTodos}
      //    layoutScroll
      //    className="TodoList"
      //    as="ul"
      // >
      <ul className="TodoList" s>
         {
            allTodos.length > 0
               ? allTodos.map((todo) =>
                  <TodoCard
                     todo={todo}
                     key={todo.ID}
                  />
               )
               : <Placeholder>You haven't created any to-dos yet...</Placeholder>
         }
      </ul>
      /* </Reorder.Group> */
   );
};