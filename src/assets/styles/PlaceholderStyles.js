import styled from "styled-components";

export const PlaceholderText = styled.li`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   color: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "var(--darkerGrayishBlue)"
         : "var(--lighterGrayishBlue)"
   };
   font: bold var(--fontSize) var(--fontFamily);
   text-align: center;
   list-style: none;
`;