//libraries and hooks
import { useContext } from "react";
//components
//assets
// context
import { themeContext } from "../context/themeContext";

export const ThemeToggler = ({ className }) => {

   const { toggleTheme } = useContext(themeContext);

   return (
      <button onClick={toggleTheme} className={className}></button>
   );
};