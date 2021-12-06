import styled from "styled-components";

export const AppLayout = styled.div`
   width: 100%;
   height: 100vh;
   max-height: 100vh;
   display: grid;
   grid-template: repeat(10, 10%) / minmax(20px, 1fr) minmax(280px, 550px) minmax(20px, 1fr);
   overflow: hidden;
`;