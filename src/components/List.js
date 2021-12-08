//libraries and hooks
import React from "react";
//components
//assets and styled components
import { Section } from "../assets/styles/ListStyles";

export const List = ({ children }) => {
   return (
      <Section>
         {children}
      </Section>
   );
};