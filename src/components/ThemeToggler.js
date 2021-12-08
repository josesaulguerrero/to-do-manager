//libraries and hooks
import { useContext } from "react";
import { Button } from "../assets/styles/ThemeTogglerStyles";
//components
//assets
// context
import { themeContext } from "../context/themeContext";

export const ThemeToggler = ({ className }) => {

   const { toggleTheme } = useContext(themeContext);

   return (
      <Button onClick={toggleTheme} className={className}></Button>
   );
};