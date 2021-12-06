import styled from "styled-components";
// images
import lightBackground from "../images/bg-desktop-light.jpg";
import darkBackground from "../images/bg-desktop-dark.jpg";

const backgroundHandler = ({ theme }) => (
   theme === "light"
      ? lightBackground
      : darkBackground
);

export const Background = styled.section`
   grid-area: 1 / 1 / 4 / 4;
   background-image: url(${props => backgroundHandler(props)});
   background-position: center center;
   background-size: cover;
`;