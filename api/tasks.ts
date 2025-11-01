import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { ParsedUrlQueryInput } from "querystring"
const API_URL = "http://localhost:3000"

export enum Priority {
  High = "high",
  Medium = "medium",
  Low = "low",
}

export interface Task {
  id: string
  title: string
  completed: boolean
  priority: Priority
  createdAt: string
  updatedAt: string
}

export type StatusFilter = "all" | "completed" | "pending"
export type PriorityFilter = Priority | "all"

export interface TaskFilters {
  status: StatusFilter
  priority: PriorityFilter
}

export type NewTask = Omit<Task, "id">

export const taskKeys = {
  all: ["tasks"] as const,
  lists: () => [...taskKeys.all, "list"] as const,
  list: (filters: TaskFilters) => [...taskKeys.lists(), filters] as const,
}

const getTasks = async (filters: TaskFilters): Promise<Task[]> => {
  const params: ParsedUrlQueryInput = {}
  if (filters.status === "completed") {
    params.completed = true
  } else if (filters.status === "pending") {
    params.completed = false
  }

  if (filters.priority !== "all") {
    params.priority = filters.priority
  }

  const { data } = await axios.get(`${API_URL}/tasks`, { params })
  return data
}

const addTask = async (newTask: NewTask): Promise<Task> => {
  const { data } = await axios.post(`${API_URL}/tasks`, newTask)
  return data
}

const updateTask = async (
  updatedTask: Partial<Task> & { id: string }
): Promise<Task> => {
  const { data } = await axios.patch(
    `${API_URL}/tasks/${updatedTask.id}`,
    updatedTask
  )
  return data
}

const deleteTask = async (taskId: string): Promise<void> => {
  await axios.delete(`${API_URL}/tasks/${taskId}`)
}

export const useGetTasks = (filters: TaskFilters) => {
  return useQuery({
    queryKey: taskKeys.list(filters),
    queryFn: () => getTasks(filters),
  })
}

export const useAddTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: taskKeys.all })
    },
  })
}

export const useUpdateTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: taskKeys.all })
    },
  })
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: taskKeys.all })
    },
  })
}
