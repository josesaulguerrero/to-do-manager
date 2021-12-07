//libraries and hooks
import { useContext } from "react";
import { Reorder } from "framer-motion";
//components
import { TodoCard } from "../components/TodoCard";
//assets and styled components
import { Section } from "../assets/styles/TodosListStyles";
// context
import { todosContext } from "../context/todosContext";

export const TodosList = ({ filterBy }) => {
   const { todos, setTodos, saveTodosInLocalStorage } = useContext(todosContext);

   const onReorder = (stateWithReOrderedToDos) => {
      setTodos(stateWithReOrderedToDos);
      saveTodosInLocalStorage(stateWithReOrderedToDos);
   };

   return (
      <Section>
         <Reorder.Group
            axis="y"
            onReorder={onReorder}
            values={todos}
            layoutScroll
            className="TodoList"
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
      </Section>
   );
};