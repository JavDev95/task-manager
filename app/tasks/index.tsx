import { useTheme } from "@/styles/useTheme"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import TaskAdd from "../../components/TaskAdd"
import TaskFilters from "../../components/TaskFilters"
import TaskList from "../../components/TaskList"
import ThemeSwitch from "../../components/ThemeSwitch"

export default function Index() {
  const styles = useStyle()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineLarge">My Tasks</Text>
        <ThemeSwitch />
      </View>
      <TaskAdd />
      <TaskFilters />
      <TaskList />
    </SafeAreaView>
  )
}

const useStyle = () => {
  const theme = useTheme()
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 16,
      paddingTop: 16,
      rowGap: 16,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 8,
    },
  })
}
