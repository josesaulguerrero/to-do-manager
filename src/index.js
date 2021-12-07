// libraries
import React from 'react';
import ReactDOM from 'react-dom';
// assets and styled components
import { GlobalStyle } from './assets/styles/GlobalStyles';
// context and providers
import { TodosContextProvider } from './context/todosContext';
import { ThemeContextProvider } from './context/themeContext';
// components
import { App } from "./routes/App";


ReactDOM.render(
  <React.StrictMode>
    <TodosContextProvider>
      <ThemeContextProvider>
        <GlobalStyle />
        <App />
      </ThemeContextProvider>
    </TodosContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
