import styled from "styled-components";

export const NavBar = styled.nav`
   grid-area: 18 / 2 / 20 / 3;
   align-self: center;
   height: 40px;
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
   box-shadow: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "0 5px 15px var(--lightGrayishBlue)"
         : "none"
   };

   @media (min-width: 500px) {
      grid-area: 17 / 2 / 18 / 3;
      justify-self: center;
      width: fit-content;
      max-width: 150px;
      height: 25px;
      align-self: start;
      border-radius: 0 0 5px 5px;
      box-shadow: none;
   }
`;
