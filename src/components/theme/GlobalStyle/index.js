import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin-block-start: 0;
    }

  ${normalize}

  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.primary.main.color };
  }  

  img{ max-width: 100%; }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  body::-webkit-scrollbar {
    width: 8px;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary.main.color };
    outline: 1px solid ${({ theme }) => theme.colors.secondary.main.color };
  }
`;

export default GlobalStyle;