//libraries and hooks
import { useLocation } from "react-router-dom";
//components
//assets and styled components
import { NavBar } from "../assets/styles/NavigationBarStyles";
import { CustomLink } from "./CustomLink";


export const NavigationBar = () => {
   const location = useLocation();
   console.log(location);
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