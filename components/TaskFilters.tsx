import { Priority, StatusFilter } from "@/api/tasks"
import { useFilterStore } from "@/store/useTaskStore"
import { useTheme } from "@/styles/useTheme"
import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { IconButton, Menu, SegmentedButtons } from "react-native-paper"

const TaskFilters: React.FC = () => {
  const styles = useStyles()
  const [menuVisible, setMenuVisible] = useState(false)

  const openMenu = () => setMenuVisible(prev => !prev)
  const closeMenu = () => setMenuVisible(false)

  const { statusFilter, setStatusFilter, priorityFilter, setPriorityFilter } =
    useFilterStore()

  return (
    <View style={styles.container}>
      <SegmentedButtons
        density="small"
        value={statusFilter}
        style={styles.statusFilter}
        onValueChange={value => setStatusFilter(value as StatusFilter)}
        buttons={[
          { value: "all", label: "All" },
          { value: "pending", label: "Pending" },
          { value: "completed", label: "Completed" },
        ]}
      />
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            onPress={openMenu}
            icon="filter-outline"
            style={styles.priorityButton}
            mode="outlined"
          />
        }
      >
        <Menu.Item
          title="All Priorities"
          style={priorityFilter === "all" && styles.selected}
          onPress={() => {
            setPriorityFilter("all")
            closeMenu()
          }}
        />
        <Menu.Item
          title="High"
          style={priorityFilter === Priority.High && styles.selected}
          onPress={() => {
            setPriorityFilter(Priority.High)
            closeMenu()
          }}
        />
        <Menu.Item
          title="Medium"
          style={priorityFilter === Priority.Medium && styles.selected}
          onPress={() => {
            setPriorityFilter(Priority.Medium)
            closeMenu()
          }}
        />
        <Menu.Item
          title="Low"
          style={priorityFilter === Priority.Low && styles.selected}
          onPress={() => {
            setPriorityFilter(Priority.Low)
            closeMenu()
          }}
        />
      </Menu>
    </View>
  )
}

const useStyles = () => {
  const theme = useTheme()
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      columnGap: 8,
    },
    statusFilter: {
      flex: 1,
    },
    priorityButton: {},
    selected: {
      backgroundColor: theme.colors.primaryContainer,
    },
  })
}

export default TaskFilters
