//libraries and hooks
//components
//assets and styled components
import { AppLayout } from "../assets/styles/AppLayout";
import { Background } from "../assets/styles/Background";
import { StyledHeader } from "../assets/styles/StyledHeader";
import { LogoText } from "../assets/styles/StyledLogo";
import { StyledThemeToggler } from "../assets/styles/StyledThemeToggler";
import { InputBar } from "../components/InputBar";
// context

export const App = () => {
   return (
      <AppLayout>
         <Background />
         <StyledHeader>
            <LogoText>TODO</LogoText>
            <StyledThemeToggler />
         </StyledHeader>
         <InputBar />
      </AppLayout>
   );
};