//libraries and hooks
//components
//assets and styled components
import { AppLayout } from "../assets/styles/AppLayout";
import { Background } from "../assets/styles/Background";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { ThemeToggler } from "../components/ThemeToggler";
import { InputBar } from "../components/InputBar";
import { List } from "../components/List";
// context

export const Layout = ({ children }) => {
   return (
      <AppLayout>
         <Background />
         <Header>
            <Logo />
            <ThemeToggler />
         </Header>
         <InputBar />
         <List>
            {children}
         </List>
      </AppLayout>
   );
};