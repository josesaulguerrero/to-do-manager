import styled from "styled-components";

export const Section = styled.section`
   grid-area: 6 / 2 / 18 / 3;
   width: 100%;
   height: 100%;
   display: grid;
   grid-template: 1fr auto / 100%;
   grid-template-areas: "list"
                        "footer";
   border-radius: 5px;


   @media (min-width: 500px) {
      box-shadow: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "0 55px 75px var(--lightGrayishBlue)"
         : "none"
   }
   }

   .TodoList {
      grid-area: list;
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
      background-color: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "var(--white)"
         : "var(--darkBlue__desaturated)"
   };
      box-shadow: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "0 5px 15px var(--lightGrayishBlue)"
         : "none"
   };
      overflow-y: auto;
      overflow-x: hidden;
   }

   .TodoList::-webkit-scrollbar {
      width: 10px;
   }

   .TodoList::-webkit-scrollbar-track {
      /* box-shadow: inset 0 0 3px grey; */
      border-radius: 5px;
   }

   .TodoList::-webkit-scrollbar-thumb {
      background: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "var(--lightGrayishBlue)"
         : "var(--darkBlue)"
   };
      border-radius: 5px;
   }
`;