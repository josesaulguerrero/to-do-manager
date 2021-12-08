import styled from "styled-components";

export const InstructionText = styled.span`
   grid-area: 20 / 2 / 21 / 3;
   color: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "var(--darkerGrayishBlue)"
         : "var(--lighterGrayishBlue)"
   };
   font: bold var(--fontSize) var(--fontFamily);
   text-align: center;

   @media (min-width: 500px) {
      grid-area: 19 / 2 / 20 / 3;
   }
`;