// libraries
import React from 'react';
import ReactDOM from 'react-dom';
// assets and styled components
import { GlobalStyle } from '@styles/GlobalStyles';
// context and providers
import { TodosContextProvider } from '@context/todosContext';
import { ThemeContextProvider } from '@context/themeContext';
// components
import { App } from "./routes/App";
// service-worker
import { serviceWorkerRegister } from './ServiceWorkerRegister';

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

serviceWorkerRegister();