import { createGlobalStyle } from "styled-components";

export const Globalstyled = createGlobalStyle`
*, *:before, *:after {
    box-sizing: border-box;
  }
    html,body{ 
        margin:0;
        padding: 0;
        overflow-x:hidden; 
        height: 100%;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        ::-webkit-scrollbar {
          display: none;
        }
    }
`;
