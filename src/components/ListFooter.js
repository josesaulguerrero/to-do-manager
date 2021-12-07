import { useContext } from "react";
//components
//assets and styled components
import { FooterSection, FooterButton, FooterSpan } from "../assets/styles/ListFooterStyles";
// context
import { todosContext } from "../context/todosContext";

export const ListFooter = () => {
   const { activeTodos, clearCompletedTodos } = useContext(todosContext);
   const { length } = activeTodos;

   return (
      <FooterSection>
         <FooterSpan>
            {length} item{length !== 1 && "s"} left
         </FooterSpan>
         <FooterButton
            onClick={clearCompletedTodos}
         >Clear completed</FooterButton>
      </FooterSection>
   );
};