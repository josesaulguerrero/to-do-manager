//libraries and hooks
//components
//assets and styled components
import { NavBar } from "../assets/styles/NavigationBarStyles";
import { CustomLink } from "./CustomLink";


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