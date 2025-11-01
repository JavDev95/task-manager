import TaskWelcomeSvg from "@/assets/svg/tasks-welcome"
import { useTheme } from "@/styles/useTheme"
import { useRouter } from "expo-router"
import React from "react"
import { Dimensions, StyleSheet, View } from "react-native"
import { Button, IconButton, Surface, Text } from "react-native-paper"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const { height } = Dimensions.get("window")

const WelcomeScreen = () => {
  const styles = useStyles()
  const theme = useTheme()
  const router = useRouter()

  return (
    <View style={styles.mainBox}>
      <View style={styles.container}>
        <IconButton
          icon="view-grid"
          iconColor={theme.colors.primary}
          size={36}
          style={styles.logo}
        />
        <View style={styles.imageContainer}>
          <TaskWelcomeSvg />
        </View>
        <Surface style={styles.bottomSheet} elevation={4}>
          <Text variant="displaySmall" style={styles.title}>
            Task Go
          </Text>
          <Text variant="headlineSmall" style={styles.subtitle}>
            Achieve More, Stress Less
          </Text>
          <Text variant="bodyLarge" style={styles.description}>
            The simple way to organize your tasks and focus on what truly
            matters.
          </Text>
          <Button
            mode="contained"
            onPress={() => router.navigate("/tasks")}
            style={styles.button}
            labelStyle={styles.buttonLabel}
            contentStyle={styles.buttonContent}
          >
            Get Started
          </Button>
        </Surface>
      </View>
    </View>
  )
}

const useStyles = () => {
  const theme = useTheme()
  const { top } = useSafeAreaInsets()
  return StyleSheet.create({
    mainBox: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      paddingTop: top,
    },
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    logo: {
      position: "absolute",
      top: 10,
      left: 10,
      zIndex: 10,
    },
    imageContainer: {
      width: "90%",
      aspectRatio: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      backgroundColor: "#ffffff80",
      borderRadius: 500,
      padding: 30,
    },
    heroImage: {
      width: "90%",
      height: "90%",
    },
    bottomSheet: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: height * 0.4,
      backgroundColor: "white",
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      paddingHorizontal: 30,
      paddingTop: 40,
      alignItems: "center",
    },
    handle: {
      width: 45,
      height: 5,
      backgroundColor: "#E0E0E0",
      borderRadius: 3,
      marginBottom: 24,
    },
    title: {
      fontWeight: "900",
      color: "#333",
      marginBottom: 8,
    },
    subtitle: {
      fontWeight: "700",
      color: "#444",
      marginBottom: 12,
      textAlign: "center",
    },
    description: {
      color: "#666",
      textAlign: "center",
      marginBottom: 24,
    },
    button: {
      width: "100%",
      borderRadius: 12,
      backgroundColor: theme.colors.primary,
    },
    buttonContent: {
      paddingVertical: 8,
    },
    buttonLabel: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
    },
  })
}

export default WelcomeScreen
