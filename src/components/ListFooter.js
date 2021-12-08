import React, { useContext } from "react";
//components
//assets and styled components
import { FooterSection, FooterButton, FooterSpan, InfoSection, NavSection } from "../assets/styles/ListFooterStyles";
// context
import { todosContext } from "@context/todosContext";
import { NavigationBar } from "@components/NavigationBar";

export const ListFooter = () => {
   const { activeTodos, clearCompletedTodos } = useContext(todosContext);
   const { length } = activeTodos;

   return (
      <FooterSection>
         <InfoSection>
            <FooterSpan>
               {length} item{length !== 1 && "s"} left
            </FooterSpan>
            <FooterButton
               onClick={clearCompletedTodos}
            >Clear completed</FooterButton>
         </InfoSection>
         <NavSection>
            <NavigationBar />
         </NavSection>
      </FooterSection>
   );
};