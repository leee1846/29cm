import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset};
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: aliceblue;
    margin: 0;
  }
  
  button, a, label,input[type="button"], input[type="checkbox"], input[type="radio"], select {
    cursor: pointer;
  }

  
  button {
    padding: 0;
    border: none;
    background-color: inherit;
  }
  
  a {
    color: #232323;
    text-decoration: none;
  }
`;

export default GlobalStyles;
