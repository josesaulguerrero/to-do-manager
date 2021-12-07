import styled from "styled-components";

export const FooterSection = styled.section`
   grid-area: footer;
   width: 100%;
   height: 100%;
   display: grid;
   grid-template: repeat(2, 40px) / 100%;
   gap: 10px;

   @media (min-width: 500px) {
      grid-template: 40px / repeat(3, 1fr);
   }
`;

export const InfoSection = styled.section`
   grid-area: 1 / 1 / 2 / 2;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 20px;
   background-color: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "var(--white)"
         : "var(--darkBlue__desaturated)"
   };
   border-radius: 0 0 5px 5px;
   box-shadow: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "0 15px 15px var(--lightGrayishBlue)"
         : "none"
   };

   @media (min-width: 500px) {
      box-shadow: none;
      grid-area: 1 / 1 / 2 / 4;
   }
`;

export const NavSection = styled.section`
   grid-area: 2 / 1 / 3 / 2;
   width: 100%;
   height: 100%;
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
      box-shadow: none;
      border-radius: 0 0 5px 5px;
      grid-area: 1 / 2 / 2 / 3;
   }
`;

export const FooterSpan = styled.span`
   color: var(--darkGrayishBlue);
   font: var(--fontSize) var(--fontFamily);
`;

export const FooterButton = styled.button`
   width: fit-content;
   height: 100%;
   border: none;
   color: var(--darkGrayishBlue);
   font: var(--fontSize) var(--fontFamily);
   background-color: transparent;
   outline: none;
   cursor: pointer;
`;

