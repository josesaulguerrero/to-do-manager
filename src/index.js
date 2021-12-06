// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import { TodosContextProvider } from './context/todosContext';
import { ThemeContextProvider } from './context/themeContext';
// components
import { App } from "./pages/App";


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
