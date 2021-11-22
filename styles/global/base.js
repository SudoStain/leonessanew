import { css } from 'styled-components'
import theme from '../theme'
 
export default css`
html{
  overflow-y: hidden;
}
 body {
   background-color: ${theme.colors.mineShaft};
   color: ${theme.colors.white};
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -webkit-tap-highlight-color: transparent;
   -moz-osx-font-smoothing: grayscale;
   overflow-x: hidden;
   width: 100%;
   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow-y: auto !important;
  max-height: 100vh;
 }

 h1 {
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 0.05rem;
  padding: 0px 0px 20px 0px;
}
h2 {
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0.05rem;
  padding: 0px 0px 20px 0px;
}
 h3 {
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 0.05rem;
}
h4 {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.03rem;
  padding-bottom: 10px;
}
h5{
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0.03rem;
  padding: 20px 0px 10px 0px;
}
p {
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 300;
  padding: 10px 0px 5px 0px;
  line-height: 25px;
  letter-spacing: 0.03rem;
}

.fa-xs {
  padding-right: 5px;
}
`
