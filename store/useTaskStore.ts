import { PriorityFilter, StatusFilter } from "@/api/tasks"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface FilterState {
  statusFilter: StatusFilter
  priorityFilter: PriorityFilter
  setStatusFilter: (filter: StatusFilter) => void
  setPriorityFilter: (filter: PriorityFilter) => void
}

export const useFilterStore = create<FilterState>()(
  persist(
    set => ({
      statusFilter: "all",
      priorityFilter: "all",
      setStatusFilter: filter => set({ statusFilter: filter }),
      setPriorityFilter: filter => set({ priorityFilter: filter }),
    }),
    {
      name: "task-filter-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => {
        return (state, error) => {
          if (error)
            console.error("An error happened during filter hydration", error)
        }
      },
    }
  )
)
