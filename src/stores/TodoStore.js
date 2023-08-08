import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', {
  state: () => ({
    tasks: [],
    isLoading: false
  }),
  persist: true,
  getters: {
    completed_count(state) {
      return this.tasks.filter((task) => task.completed).length
    },
    pending_count(state) {
      return this.tasks.filter((task) => !task.completed).length
    }
  },
  actions: {
    AddTask(task) {
      this.tasks.push(task)
    },
    DeleteTask(index) {
      this.tasks.splice(index, 1)
    }
  }
})
