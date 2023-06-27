import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../src/components/theme'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.background};
  }

  a {
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s
  }

  a:hover {
    color: ${(props) => props.theme.primaryHover}
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
`

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
