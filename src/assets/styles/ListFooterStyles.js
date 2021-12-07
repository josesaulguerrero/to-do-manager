import styled from "styled-components";

export const FooterSection = styled.section`
   grid-area: footer;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 20px;
   background-color: var(--white);
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
