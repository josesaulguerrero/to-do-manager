import styled from "styled-components";

export const Section = styled.section`
   grid-area: 6 / 2 / 17 / 3;
   width: 100%;
   height: 100%;
   display: grid;
   grid-template: 1fr 40px / 100%;
   grid-template-areas: "list"
                        "footer";
   background-color: var(--lightGray);
   border-radius: 5px;

   ul {
      grid-area: list;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      overflow-y: auto;
   }
`;