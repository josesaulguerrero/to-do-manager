import { createGlobalStyle } from "styled-components";

const customPropertiesHandler = (({ theme }) => {
   return theme === "light"
      ? `
         --lightGray: hsl(0, 0 %, 98 %);
         --lightGrayishBlue: hsl(233, 11 %, 84 %);
         --lighterGrayishBlue: hsl(236, 33 %, 92 %);
         --darkGrayishBlue: hsl(236, 9 %, 61 %);
         --darkerGrayishBlue: hsl(235, 19 %, 35 %);
      `
      : `
         --darkBlue: hsl(235, 21 %, 11 %);
         --darkBlue__desaturated: hsl(235, 24 %, 19 %);
         --lightGrayishBlue: hsl(234, 39 %, 85 %);
         --lighterGrayishBlue: hsl(236, 33 %, 92 %);
         --darkGrayishBlue: hsl(234, 11 %, 52 %);
         --darkerGrayishBlue: hsl(233, 14 %, 35 %);
      `;
});

export const GlobalStyle = createGlobalStyle`
   html {
      font-size: 62.5%;
   }

   /* custom properties */
   :root {
      --fontFamily: 'Josefin Sans', sans-serif;
      --brightBlue:  hsl(220, 98 %, 61 %);
      --checkedGradient: linear-gradient(linear-gradient hsl(192, 100 %, 67 %) to hsl(280, 87 %, 65 %));
      ${(props) => customPropertiesHandler(props)}
   }

   body {
      font-size: 1.8rem;
   }

   *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      font-family: var(---fontFamily);
      scroll-behavior: smooth;
   }
`;