import { createGlobalStyle } from 'styled-components'
import { ITheme } from './styled'

export default createGlobalStyle`
@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  src: url(../assets/fonts/Poppins.woff) format('woff'),
  url(../assets/fonts/Poppins.woff2) format('woff2');
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${(props: ITheme) => props.theme.body};
    font-family: Poppins, sans-serif;
  }
`
