//libraries and hooks
//components
//assets and styled components
import { StyledHeader } from "../assets/styles/HeaderStyles";

export const Header = ({ children }) => {
   return (
      <StyledHeader >
         {children}
      </StyledHeader>
   );
};