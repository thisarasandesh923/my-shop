<script setup lang="ts">
import type { Product } from '../types/products'

defineProps<{
  product: Product
}>()

     </script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-xl hover:scale-105 transition-all duration-300"><div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-xl hover:scale-105 transition-all duration-300"></div>
    <img 
      :src="product.thumbnail" 
      :alt="product.title"
      class="w-full h-48 object-cover rounded-md"
    />
    <h2 class="text-lg font-bold mt-2 dark:text-white">
      {{ product.title }}
    </h2>
    
    <p class="text-blue-600 font-bold">
      ${{ product.price }}
    </p>
    
    <p class="text-yellow-500">
      ⭐ {{ product.rating }}
    </p>

  </div>
</template>