//libraries and hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import { Layout } from "../pages/Layout";
import { AllTodosList } from "../pages/AllTodosList";
import { ActiveTodosList } from "../pages/ActiveTodosList";
import { CompletedTodosList } from "../pages/CompletedTodosList";


export const App = () => {
   return (
      <Layout>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<AllTodosList />} />
               <Route path="active" element={<ActiveTodosList />} />
               <Route path="completed" element={<CompletedTodosList />} />
            </Routes>
         </BrowserRouter>
      </Layout>
   );
};