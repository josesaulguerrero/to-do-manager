//libraries and hooks
import React, { useContext } from "react";
import { Reorder } from "framer-motion";
//components
import { TodoCard } from "@components/TodoCard";
import { Placeholder } from "@components/Placeholder";
//assets and styled components
// context
import { todosContext } from "@context/todosContext";

export const CompletedTodos = () => {
   const { allTodos, completedTodos, setCompletedTodos, } = useContext(todosContext);

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
            // if there are no todos...
            (allTodos.length === 0) &&
            <Placeholder>You haven't created any to-dos yet...</Placeholder>
         }
         {
            (allTodos.length > 0 && completedTodos.length === 0) &&
            <Placeholder>You haven't completed any to-dos...</Placeholder>
         }
         {
            // are there any todos? then...
            completedTodos.length > 0 &&
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