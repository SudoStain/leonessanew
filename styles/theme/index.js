import {
  baseFontSize,
  breakpoints,
  container,
  gridSize,
  gutterWidth,
  outerMargin
} from '../../config/flexgrid'

export default {
  colors: {
    mineShaft: '#ffffff',
    black: '#000',
    eggBlue: '#07cbd6',
    salmon: '#ff7a7a',
    amber: '#ffc400',
    cornflowerBlue: '#4285f4'
  },
  flexboxgrid: {
    gridSize, // columns
    gutterWidth: gutterWidth / baseFontSize, // rem
    outerMargin: outerMargin / baseFontSize, // rem
    mediaQuery: 'only screen',
    container: {
      sm: container.sm / baseFontSize, // rem
      md: container.md / baseFontSize, // rem
      lg: container.lg / baseFontSize, // rem
      xl: container.xl / baseFontSize // rem
    },
    breakpoints: {
      xs: breakpoints.xs / baseFontSize, // em
      sm: breakpoints.sm / baseFontSize, // em
      md: breakpoints.md / baseFontSize, // em
      lg: breakpoints.lg / baseFontSize, // em
      xl: breakpoints.xl / baseFontSize, // em
      
    }
  },
 }


 const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1400
  }
};
 