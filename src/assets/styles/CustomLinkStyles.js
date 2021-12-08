import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: var(--darkGrayishBlue);
   font: 1.3rem var(--fontFamily);
   font-weight: bold;


   &[current="current"] {
      color: var(--brightBlue);
   }
`;