//libraries and hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import { Layout } from "../pages/Layout";
import { AllTodos } from "../pages/AllTodos";


export const App = () => {
   return (
      <Layout>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<AllTodos />} />
            </Routes>
         </BrowserRouter>
      </Layout>
   );
};