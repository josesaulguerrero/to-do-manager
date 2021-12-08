//libraries and hooks
//components
//assets and styled components
import { PlaceholderText } from "../assets/styles/PlaceholderStyles";

export const Placeholder = ({ children }) => {
   return (
      <PlaceholderText>
         {children}
      </PlaceholderText>
   );
};