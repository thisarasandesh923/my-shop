<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()

const emit = defineEmits<{
  search: [query: string]
}>()

const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-md px-8 py-4 flex items-center justify-between">
    
    <h1 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
  🛍️ NprMart
</h1>

    <input 
      type="text"
      placeholder="Search products..."
      class="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:border-blue-500"
      @input="emit('search', ($event.target as HTMLInputElement).value)"
    />

    <div class="flex items-center gap-4">

      <div class="relative cursor-pointer">
        <span class="text-2xl">🛒</span>
        <span 
          v-if="cartStore.totalItems > 0"
          class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
        >
          {{ cartStore.totalItems }}
        </span>
      </div>

      <button
        @click="toggleDark"
        class="text-2xl cursor-pointer"
      >
        {{ isDark ? '☀️' : '🌙' }}
      </button>

    </div>

  </nav>
</template>