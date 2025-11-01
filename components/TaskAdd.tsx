import { Priority, useAddTask } from "@/api/tasks";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import {
    Button as PaperButton,
    TextInput as PaperTextInput,
    Text,
} from "react-native-paper";

type FormData = {
  taskTitle: string;
};

const TaskAdd: React.FC = () => {
  const { mutate: addTask, isPending: isAdding } = useAddTask();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      taskTitle: "",
    },
  });

  const handleAddTask = (data: FormData) => {
    const now = new Date().toISOString();
    addTask(
      {
        title: data.taskTitle,
        completed: false,
        priority: Priority.Medium,
        createdAt: now,
        updatedAt: now,
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: "Task title is required.",
            minLength: {
              value: 3,
              message: "Task title must be at least 3 characters long.",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PaperTextInput
              label="New Task"
              mode="outlined"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.taskTitle}
            />
          )}
          name="taskTitle"
        />
        <PaperButton
          mode="contained"
          onPress={handleSubmit(handleAddTask)}
          loading={isAdding}
          disabled={isAdding}
          style={styles.button}
        >
          Add
        </PaperButton>
      </View>
      {errors.taskTitle && (
        <Text style={styles.errorText}>{errors.taskTitle.message}</Text>
      )}
    </>
  );
};

export default TaskAdd;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    marginTop: 8,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    marginTop: 4,
  },
});