import React from "react";
import {
   useMatch,
   useResolvedPath
} from "react-router-dom";
import { StyledLink } from "@styles/CustomLinkStyles";


export const CustomLink = ({ children, to, ...props }) => {
   let resolved = useResolvedPath(to);
   let match = useMatch({ path: resolved.pathname, end: true });
   return (
      <StyledLink
         to={to}
         {...props}
         current={match && "current"}
      >
         {children}
      </StyledLink>
   );
};