import styled from "styled-components";

export const Form = styled.form`
   grid-area: 4 / 2 / 6 / 3;
   width: 100%;
   height: 40px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   align-self: center;
`;

export const Input = styled.input`
   width: 70%;
   height: 100%;
   padding: 0 10px;
   border: none;
   font: 1.3rem var(--fontFamily);
   background-color: var(--white);
   border-radius: 5px 0 0 5px;
   outline: none;
   box-sizing: border-box;

   :focus  {
      font-weight: bold;
   }
`;

export const Button = styled.button`
   width: 30%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   color: var(--white);
   font: bold 1.6rem var(--fontFamily);
   background-color: var(--brightBlue);
   outline: none;
   border-radius: 0 5px 5px 0;
   cursor: pointer;
   will-change: transform;
   transition: transform .2s ease-in-out;

   @media (hover: hover) {
      :hover {
         transform: scaleX(1.1);
      }
   }
`;