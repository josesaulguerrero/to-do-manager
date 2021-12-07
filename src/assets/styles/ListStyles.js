import styled from "styled-components";

export const Section = styled.section`
   grid-area: 6 / 2 / 18 / 3;
   width: 100%;
   height: 100%;
   display: grid;
   grid-template: 1fr 40px / 100%;
   grid-template-areas: "list"
                        "footer";
   border-radius: 5px;
   background-color: var(--white);
   box-shadow: 0 5px 15px var(--lightGrayishBlue);

   @media (min-width: 500px) {
      box-shadow: 0 55px 75px var(--lightGrayishBlue);
   }

   .TodoList {
      grid-area: list;
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
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
      background: var(--lightGrayishBlue);
      border-radius: 5px;
   }
`;