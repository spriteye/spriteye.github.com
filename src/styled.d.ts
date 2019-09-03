import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string,
    color: string,
    themeTransition: string
  }
}
