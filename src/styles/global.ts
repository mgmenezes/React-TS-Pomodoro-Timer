import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  :focus{
    outline: 0;
    box-shadow:  0 0 0 1px ${(boxShadow) => boxShadow.theme["purple-300"]};
  }       
 

  body{
    background-color: ${(colors) => colors.theme["gray-900"]};
    color: ${(colors) => colors.theme["gray-300"]};
    --webkit-font-smoothing: antialiased;
  }


  body,button,input,select,textarea{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`;
