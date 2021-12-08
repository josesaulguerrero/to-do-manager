//libraries and hooks
import React from "react";
//components
//assets and styled components
import { PlaceholderText } from "../assets/styles/PlaceholderStyles";

export const Placeholder = ({ children }) => {
   return (
      <PlaceholderText>
         {children}
      </PlaceholderText>
   );
};