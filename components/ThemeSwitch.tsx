import { useThemeStore } from "@/store/themeStore"
import React from "react"
import { Switch } from "react-native-paper"

const ThemeSwitch: React.FC = () => {
  const { themeMode, toggleTheme } = useThemeStore()
  const isDarkMode = themeMode === "dark"

  return <Switch value={isDarkMode} onValueChange={toggleTheme} />
}

export default ThemeSwitch
