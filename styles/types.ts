import { ColorValue } from "react-native"
import { MD3Theme } from "react-native-paper"

export interface ThemeI extends MD3Theme {
  colors: MD3Theme["colors"] & {
    priority: {
      high: ColorValue
      medium: ColorValue
      low: ColorValue
      none: ColorValue
    }
  }
}
