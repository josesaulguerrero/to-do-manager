//libraries and hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import { Layout } from "../pages/Layout";
import { AllTodos } from "../pages/AllTodos";
import { ActiveTodos } from "../pages/ActiveTodos";
import { CompletedTodos } from "../pages/CompletedTodos";


export const App = () => {
   return (
      <Layout>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<AllTodos />} />
               <Route path="active" element={<ActiveTodos />} />
               <Route path="completed" element={<CompletedTodos />} />
            </Routes>
         </BrowserRouter>
      </Layout>
   );
};