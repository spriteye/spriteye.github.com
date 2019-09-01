import { DefaultTheme } from "styled-components"

const base = {
  themeTransition: "color 0.2s ease-out 0s, background 0.2s ease-out 0s"
}

export const dark: DefaultTheme = {
  ...base,
  bg: "#283149",
  color: "#f0f0f0"
}

export const light: DefaultTheme = {
  ...base,
  bg: "white",
  color: "#333"
}
