//libraries and hooks
import React, { useContext } from "react";
import { Reorder } from "framer-motion";
//components
import { TodoCard } from "@components/TodoCard";
import { Placeholder } from "../components/Placeholder";
//assets and styled components
// context
import { todosContext } from "../context/todosContext";

export const ActiveTodos = () => {
   const { activeTodos, allTodos, setActiveTodos, } = useContext(todosContext);

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
            // if there are no todos...
            (allTodos.length === 0) && <Placeholder>You haven't created any to-dos yet...</Placeholder>
         }
         {
            // if all the todos have been completed..
            (activeTodos.length === 0 && allTodos.length > 0) && <Placeholder>You've completed all your to-dos</Placeholder>
         }
         {
            //if there are active todos...
            activeTodos.length > 0 &&
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