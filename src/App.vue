<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="flex justify-between items-center bg-blue-300 px-5 p-2 space-x-5">
      <img alt="MK" src="@/assets/logo.svg" width="32" height="32" />
      <div class="">
        <nav class="">
          <RouterLink to="/" class="hover:text-gray-100">Home</RouterLink>
          <RouterLink to="/about"
            class="px-5 hover:text-gray-100"
            >About</RouterLink>
        </nav>
      </div>
      <div class="rounded-full bg-blue-50 h-8 w-8">
      </div>
    </div>
  </header>

  <RouterView />

</template>

<style scoped>

</style>
