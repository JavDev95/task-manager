import { useThemeStore } from "@/store/themeStore"
import { darkTheme, lightTheme } from "@/styles/theme"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Stack } from "expo-router"
import { PaperProvider } from "react-native-paper"

const queryClient = new QueryClient()

export default function RootLayout() {
  const { themeMode } = useThemeStore()
  const theme = themeMode === "dark" ? darkTheme : lightTheme

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <Stack screenOptions={{ headerShown: false }} />
      </PaperProvider>
    </QueryClientProvider>
  )
}
