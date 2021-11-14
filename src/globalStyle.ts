import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { mediaQueries } from './utils/mediaQueries';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-family: "Press Start 2P";
    font-size: 62.5%;
    ${mediaQueries.smartphone`
      font-size: 50.5%;
    `};
  }
  h1 {
    font-size: 3.6rem;
    margin: 32px 0;
  }
  h2 {
    font-size: 3.2rem;
    margin: 20px 0;
  }
  h3 {
    font-size: 2.4rem;
    margin: 16px 0;
    ${mediaQueries.laptop`
      font-size: 2rem;
    `}
  }
  h4 {
    font-size: 2.0rem;
    margin: 12px 0;
  }
  p, a {
    font-size: 2.0rem;
    font-weight: 100;
    ${mediaQueries.laptop`
      font-size: 1.6rem;
    `}
  }
  p {
    margin: 12px 0;
  }
  a {
    text-decoration: none;
  }
`;
