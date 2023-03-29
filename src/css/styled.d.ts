import 'styled-components'

interface IPallet {}

declare module 'styled-components' {
  export interface DefaultTheme {
    pallete: {
      orange: string;
      white: string;
      gray: string;
      gray_hard: string;
      shape: string;
      black_medium: string;
      background: string;
      inputs: string;
      error: string;
    }
  }
}