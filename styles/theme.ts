import { configureFonts, MD3DarkTheme, MD3LightTheme } from "react-native-paper"
import { ThemeI } from "./types"

const fontConfig = {
  fontFamily: "open-sans",
  letterSpacing: 0,
  fontWeight: "normal",
  lineHeight: 22,
  fontSize: 16,
}

export const lightTheme: ThemeI = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#5603ad",
    onPrimary: "#ffffff",
    secondary: "#8367c7",
    onSecondary: "#ffffff",
    tertiary: "#b3e9c7",
    background: "#f0fff1",
    surface: "#f0fff1",
    onSurface: "#000000",
    priority: {
      high: "#d90429",
      medium: "#8367c7",
      low: "#b3e9c7",
      none: "#ccc",
    },
  },
  fonts: configureFonts({
    config: {
      regular: { ...fontConfig, fontWeight: "normal" },
      medium: { ...fontConfig, fontWeight: "normal" },
      light: { ...fontConfig, fontWeight: "normal" },
      thin: { ...fontConfig, fontWeight: "normal" },
    },
  }),
}

export const darkTheme: ThemeI = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#5603ad",
    onPrimary: "#ffffff",
    secondary: "#8367c7",
    onSecondary: "#ffffff",
    tertiary: "#b3e9c7",
    background: "#1c1b1f",
    surface: "#1c1b1f",
    onSurface: "#e6e1e5",
    priority: {
      high: "#d90429",
      medium: "#8367c7",
      low: "#b3e9c7",
      none: "#444",
    },
  },
  fonts: lightTheme.fonts,
}
export default lightTheme
