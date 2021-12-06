//libraries and hooks
import { useContext } from "react";
//components
import { TodoCard } from "../components/todoCard";
//assets
// context
import { todosContext } from "../context/todosContext";

export const AllTodos = () => {
   const { getAll } = useContext(todosContext);
   const allTodos = getAll();
   return (
      <ul>
         {
            allTodos.map(({ content, ID, completed }) =>
               <TodoCard
                  key={ID}
                  content={content}
                  ID={ID}
                  completed={completed}
               />
            )
         }
      </ul>
   );
};