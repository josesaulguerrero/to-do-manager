//libraries and hook
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import { Layout } from "../containers/Layout";
import { AllTodos } from "../containers/AllTodos";
import { ActiveTodos } from "../containers/ActiveTodos";
import { CompletedTodos } from "../containers/CompletedTodos";


export const App = () => {
   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path="/" element={<AllTodos />} />
               <Route path="active" element={<ActiveTodos />} />
               <Route path="completed" element={<CompletedTodos />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   );
};