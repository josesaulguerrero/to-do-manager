//libraries and hooks
//components
//assets and styled components
import { AppLayout } from "../assets/styles/AppLayout";
import { Background } from "../assets/styles/Background";
import { Header } from "../components/Header";
// context

export const App = () => {
   return (
      <AppLayout>
         <Background />
         <Header />
      </AppLayout>
   );
};