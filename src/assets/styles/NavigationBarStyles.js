import styled from "styled-components";

export const NavBar = styled.nav`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
   background-color: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "var(--white)"
         : "var(--darkBlue__desaturated)"
   };
   border-radius: 5px;
`;
