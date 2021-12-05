// libraries
import React from 'react';
import ReactDOM from 'react-dom';
// components
import { TodosContextProvider } from './context/todosContext';
import { App } from "./pages/App";


ReactDOM.render(
  <React.StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
