import styled from "styled-components";

// images
import crossImage from "../images/icon-cross.svg";
import checkImage from "../images/icon-check.svg";

export const Card = styled.article`
   width: 100%;
   max-width: 450px;
   height: 40px;
   display: grid;
   grid-template: 100% / 30px 1fr 30px;
   grid-template-areas: "checkbox content button";
   align-items: center;
   padding: 5px 20px;
   border-bottom: 1px solid ${({ theme }) =>
      theme.currentTheme === "light"
         ? "var(--lightGrayishBlue)"
         : "var(--darkerGrayishBlue)"
   };
   background-color: var(--white);background-color: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "var(--white)"
         : "var(--darkBlue__desaturated)"
   };
   list-style: none;
   cursor: grab;
   :active {
      cursor: grabbing;
   }
`;

export const Checkbox = styled.input`
   grid-area: checkbox;
   width: 20px;
   height: 20px;
   position: relative;
   background-color: transparent;
   border-radius: 50%;
   visibility: hidden;
   cursor: pointer;

   ::before {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border: 1px solid var(--darkGrayishBlue);
      border-radius: 50%;
      visibility: visible;
      opacity: 1;
   }

   ::after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border: none;
      /* background-color: rebeccapurple; */
      background-image: url("${() => checkImage}"), var(--checkedGradient);
      background-position: center;
      background-size: auto;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50%;
      visibility: hidden;
      opacity: 0;
      will-change: visibility, opacity;
      transition: visibility .1s ease-in-out, opacity .1s ease-in-out;
   }

   :checked::before {
      visibility: hidden;
      opacity: 0;
   }

   :checked::after {
      visibility: visible;
      opacity: 1;
   }

   :checked + span {
      text-decoration: line-through;
      color: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "var(--darkGrayishBlue)"
         : "var(--darkerGrayishBlue)"
   };
   }
`;

export const Span = styled.span`

   grid-area: content;
   color: ${({ theme }) =>
      theme.currentTheme === "light"
         ? "var(--darkerGrayishBlue)"
         : "var(--lighterGrayishBlue)"
   };
   font: var(--fontSize) var(--fontFamily);
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

export const RemoveButton = styled.button`
   width: 100%;
   height: 100%;
   background-color: transparent;
   background-image: url(${crossImage});
   background-size: 15px;
   background-repeat: no-repeat;
   background-position: center;
   border: none;
   cursor: pointer;
`;