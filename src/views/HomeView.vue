<script setup>

import { ref, onMounted } from 'vue'
import {useTodoStore} from '../stores/TodoStore'

const todoStore = useTodoStore()

const taskInput = ref('')
const taskInputItem = ref()

onMounted(() => {
  taskInputItem.value.focus()
})
</script>

<template>
  <div class="bg-blue-50 h-screen">
    <div class="flex flex-col justify-center">
      <div class="max-w-2xl md:ml-32">
        <div class="flex justify-start items-center mx-10 pt-10">
          <input ref="taskInputItem" @keydown.enter="todoStore.AddTask({completed: false, title: taskInput, lastUpdated: ''});taskInput='';" v-model="taskInput" type="text"
            class="w-full border-0 border-gray-500 rounded-md text-gray-700 text-sm">
          <button @click.prevent="todoStore.AddTask({completed: false, title: taskInput, lastUpdated: ''})" class="p-2 bg-blue-500 rounded-md ml-2">Add</button>
        </div>

        <div class="m-10">
          <div class="flex flex-col justify-center items-start p-2">
            <span class="text-sm text-gray-600 mb-2">Total {{ todoStore.pending_count }} pending
              tasks,
              {{ todoStore.completed_count }} complete tasks.</span>
            <div v-for="task, index in todoStore.tasks" :key="index"
              class="h-12 w-full bg-white my-2 flex justify-between items-center rounded-md">
              <input type="checkbox" class="ml-2 mr-5 rounded-md" @input="task.completed = !task.completed"
                :checked="task.completed">
              <span class="w-full text-sm" :class="{ 'line-through': task.completed }">{{ task.title }}</span>
              <button class="mr-2" @click.prevent="todoStore.DeleteTask(index)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                  class="w-5 h-5 text-red-800 hover:text-red-400">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- {{ tasks }} -->
      </div>
    </div>
  </div>
</template>
