import {
  Priority,
  useDeleteTask,
  useGetTasks,
  useUpdateTask,
} from "@/api/tasks"
import { useFilterStore } from "@/store/useTaskStore"
import { ThemeI } from "@/styles/types"
import { useTheme } from "@/styles/useTheme"
import React, { useCallback, useEffect, useRef } from "react"
import {
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native"
import {
  Badge,
  Card,
  Checkbox,
  Chip,
  IconButton,
  Text,
} from "react-native-paper"
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated"

const TaskList: React.FC = () => {
  const theme = useTheme()
  const styles = useStyle()
  const { statusFilter, priorityFilter } = useFilterStore()

  const {
    data: tasks,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useGetTasks({
    status: statusFilter,
    priority: priorityFilter,
  })

  const { mutate: updateTask } = useUpdateTask()
  const { mutate: deleteTask } = useDeleteTask()
  const isFirstRender = useRef(true)

  useEffect(() => {
    isFirstRender.current = false
  }, [tasks?.length])

  const getPriorityColor = useCallback((priority: Priority, theme: ThemeI) => {
    switch (priority) {
      case Priority.High:
        return theme.colors.priority.high
      case Priority.Medium:
        return theme.colors.priority.medium
      case Priority.Low:
        return theme.colors.priority.low
      default:
        return theme.colors.priority.none
    }
  }, [])

  if (isLoading) {
    return (
      <ActivityIndicator
        animating={true}
        size="large"
        style={styles.centered}
      />
    )
  }

  if (isError) {
    return (
      <View style={styles.centered}>
        <Text>Error fetching tasks. Please try again.</Text>
      </View>
    )
  }

  return (
    <>
      <View style={styles.counterContainer}>
        <Text variant="bodyMedium">
          {statusFilter === "all"
            ? "Total Tasks"
            : `Total ${statusFilter} tasks`}
        </Text>
        <Badge size={24} style={styles.badge}>
          {tasks?.length || 0}
        </Badge>
      </View>
      <Animated.FlatList
        data={tasks}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isFetching && !isLoading}
            onRefresh={refetch}
            colors={[theme.colors.primary]}
            tintColor={theme.colors.primary}
          />
        }
        keyExtractor={item => item.id.toString()}
        entering={FadeIn.duration(400)}
        exiting={FadeOut.duration(400)}
        itemLayoutAnimation={LinearTransition}
        ListEmptyComponent={
          <View style={styles.emptyComponent}>
            <Text variant="titleMedium">No tasks yet. Add your first one!</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Card
            style={[
              styles.taskItem,
              item.completed && styles.completedTaskItem,
            ]}
          >
            <Card.Content>
              <View style={styles.taskContent}>
                <Checkbox
                  status={item.completed ? "checked" : "unchecked"}
                  onPress={() =>
                    updateTask({ id: item.id, completed: !item.completed })
                  }
                />
                <Text
                  variant="bodyLarge"
                  style={[
                    styles.taskTitle,
                    item.completed && styles.completedTaskTitle,
                  ]}
                >
                  {item.title}
                </Text>
                <IconButton
                  icon="delete-outline"
                  size={20}
                  onPress={() => {
                    deleteTask(item.id)
                  }}
                />
              </View>
              <Chip
                icon="flag"
                style={[
                  styles.priorityChip,
                  { backgroundColor: getPriorityColor(item.priority, theme) },
                ]}
                textStyle={styles.priorityChipText}
              >
                {item.priority}
              </Chip>
            </Card.Content>
          </Card>
        )}
      />
    </>
  )
}

const useStyle = () => {
  const theme = useTheme()
  return StyleSheet.create({
    taskItem: {
      marginBottom: 10,
    },
    completedTaskItem: {
      opacity: 0.6,
    },
    taskContent: {
      flexDirection: "row",
      alignItems: "center",
    },
    taskTitle: {
      flex: 1,
      marginLeft: 8,
    },
    completedTaskTitle: {
      textDecorationLine: "line-through",
      color: "grey",
    },
    priorityChip: {
      alignSelf: "flex-start",
      marginTop: 8,
      marginLeft: 8,
    },
    priorityChipText: {
      color: "white",
      fontWeight: "bold",
    },
    emptyComponent: {
      alignItems: "center",
      marginTop: 40,
    },
    centered: {
      marginTop: 40,
    },
    counterContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 8,
      marginBottom: 12,
    },
    badge: {
      fontWeight: "bold",
      backgroundColor: theme.colors.priority.high,
    },
  })
}

export default TaskList
