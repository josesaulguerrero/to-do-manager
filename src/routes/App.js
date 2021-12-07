//libraries and hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import { Layout } from "../pages/Layout";
import { TodosList } from "../pages/TodosList";


export const App = () => {
   return (
      <Layout>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<TodosList filterBy="all" />} />
            </Routes>
         </BrowserRouter>
      </Layout>
   );
};