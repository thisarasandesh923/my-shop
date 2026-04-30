<script setup lang="ts">
const props = defineProps<{
  categories: string[]
  selected: string
}>()

const emit = defineEmits<{
  select: [category: string]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-2 mb-6">
    
    <button
      @click="emit('select', 'all')"
      :class="props.selected === 'all' 
        ? 'bg-blue-600 text-white' 
        : 'bg-white text-gray-700'"
      class="px-4 py-2 rounded-full border border-gray-300 cursor-pointer"
    >
      All
    </button>

    <button
      v-for="category in props.categories"
      :key="category"
      @click="emit('select', category)"
      :class="props.selected === category 
        ? 'bg-blue-600 text-white' 
        : 'bg-white text-gray-700'"
      class="px-4 py-2 rounded-full border border-gray-300 cursor-pointer capitalize"
    >
      {{ category }}
    </button>

  </div>
</template>