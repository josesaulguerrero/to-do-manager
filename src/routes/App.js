//libraries and hook
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import { Layout } from "../pages/Layout";
import { AllTodos } from "../pages/AllTodos";
import { ActiveTodos } from "../pages/ActiveTodos";
import { CompletedTodos } from "../pages/CompletedTodos";


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