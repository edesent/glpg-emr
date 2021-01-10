import { createGlobalStyle } from 'styled-components'

import { Normalize } from './normalize'

const GlobalStyle = createGlobalStyle`

  ${Normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.6;
    font-size: 10px;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  button,
  input {
    border: none;
  }
`

export default GlobalStyle
