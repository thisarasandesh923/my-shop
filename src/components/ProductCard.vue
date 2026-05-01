<script setup lang="ts">
import type { Product } from '../types/products'

defineProps<{
  product: Product
}>()

     </script>

<template>
  <div class="bg-white rounded-lg shadow p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
    <img 
      :src="product.thumbnail" 
      :alt="product.title"
      class="w-full h-48 object-cover rounded-md"
    />
    <h2 class="text-lg font-bold mt-2">
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