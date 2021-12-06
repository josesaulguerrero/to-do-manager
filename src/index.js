// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import { TodosContextProvider } from './context/todosContext';
// components
import { App } from "./pages/App";


ReactDOM.render(
  <React.StrictMode>
    <TodosContextProvider>
      <GlobalStyle theme="dark" />
      <App />
    </TodosContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
