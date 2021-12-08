//libraries and hooks
import React from "react";
//components
//assets and styled components
import { StyledHeader } from "@styles/HeaderStyles";

export const Header = ({ children }) => {
   return (
      <StyledHeader >
         {children}
      </StyledHeader>
   );
};