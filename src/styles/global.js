import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
    height: 100vh;
  }

  body, input, button, textarea {
    outline: none;
    font-family: "Roboto", serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  a {
    text-decoration: none
  }

  li {
    list-style: none
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }
`
