import styled from "styled-components";

export const AppLayout = styled.div`
   width: 100%;
   height: 100vh;
   min-height: 600px;
   max-height: 100vh;
   display: grid;
   grid-template: repeat(20, 5%) / minmax(20px, 1fr) minmax(280px, 450px) minmax(20px, 1fr);
   overflow: hidden;
`;