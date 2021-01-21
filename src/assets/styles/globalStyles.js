import { createGlobalStyle } from 'styled-components'

import { Normalize } from './normalize'

const GlobalStyle = createGlobalStyle`

  ${Normalize}

  :root {
    --color__gray--light: #F0F4F8;
  }

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

  #__react-alert__ span {
    text-transform: none;
    font-weight: 500;
  }

  .container-wrapper {
    padding: 90px 50px 50px;
  }
`

export default GlobalStyle
