import { createContext, useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

export const themeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
   const [theme, setTheme] = useState(
      window.localStorage.getItem("todosTheme")
         ? JSON.parse(window.localStorage.getItem("todosTheme"))
         : "light"
   );

   const toggleTheme = () => {
      setTheme(prevTheme => {
         const newTheme =
            prevTheme === "light" /* is the previous theme equal to "light"? */
               ? "dark" /* if so, then toggle the theme to "dark" */
               : "light";
         window.localStorage.setItem("todosTheme", JSON.stringify(newTheme));
         return newTheme;
      });
   };

   return (
      <themeContext.Provider value={{ toggleTheme }} >
         {/* I pass the theme state through the styled-components provider, so That i can access it from my styles */}
         <StyledComponentsThemeProvider theme={{ currentTheme: theme }}>
            {children}
         </StyledComponentsThemeProvider>
      </themeContext.Provider>
   );
};