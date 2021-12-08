//libraries and hooks
import React from "react";
//components
//assets and styled components
import { NavBar } from "@styles/NavigationBarStyles";
import { CustomLink } from "@components/CustomLink";


export const NavigationBar = () => {
   return (
      <>
         <NavBar>
            <CustomLink to="/">All</CustomLink>
            <CustomLink to="active">Active</CustomLink>
            <CustomLink to="completed">Completed</CustomLink>
         </NavBar>
      </>
   );
};