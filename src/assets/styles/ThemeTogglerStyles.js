import styled from "styled-components";

// images
import SunIcon from "@images/icon-sun.svg";
import MoonIcon from "@images/icon-moon.svg";

const imageHandler = ({ currentTheme }) => (
   currentTheme === "light"
      ? MoonIcon
      : SunIcon
);

export const Button = styled.button`
   width: 35px;
   height: 35px;
   border: none;
   outline: none;
   border-radius: 50%;
   background-image: url(${props => imageHandler(props.theme)});
   background-position: center;
   background-size: 20px;
   background-repeat: no-repeat;
   background-color: transparent;
   cursor: pointer;
   will-change: transform;
   transition: transform .1s ease-in-out;

   @media (hover: hover) {
      :hover {
         transform: scale(1.2);
      }
   }
`;