import { createContext, useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

export const themeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
   const [theme, setTheme] = useState("light");

   const toggleTheme = () => {
      setTheme(prevTheme => (
         prevTheme === "light" /* is the previous theme equal to "light"? */
            ? "dark" /* if so, then toggle the theme to "dark" */
            : "light" /* else, toggle the theme to "light" */
      ));
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