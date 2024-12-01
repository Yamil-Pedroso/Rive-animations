
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  //@font-face {
  //  font-family: 'Press Start 2P', sans-serif;
  //  src: url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  //  font-style: normal;
  //  font-weight: 400;
  //}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  body {
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.primary};
    transition: background-color 0.3s ease, color 0.3s ease
  }

  .comp-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 6rem;
    margin-top: 8rem;
  }
`;
