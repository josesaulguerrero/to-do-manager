import styled from "styled-components";
import { Header } from "../../components/Header";

export const StyledHeader = styled(Header)`
   grid-area: 2 / 2 / 4 / 3;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   z-index: 1;
`;