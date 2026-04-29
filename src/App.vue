<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Product, ProductsResponse } from './types/products'

const products =    ref<Product[]>([])
const loading =ref(true)

onMounted(async () => {
  const response = await fetch('https://dummyjson.com/products?limit=20')
  const data: ProductsResponse = await response.json()
  products.value = data.products
  loading.value = false
})
</script>

<template>
   <div class="min-h-screen bg-gray-100 p-8">
    
    <h1 class="text-3xl font-bold text-center text-blue-600 mb-8">
      My Shop
    </h1>

    <div v-if="loading">
      <p class="text-center text-gray-500">Loading products...</p>
    </div>

    <div v-else>
      <p class="text-center text-green-600">
        Found {{ products.length }} products!
      </p>
    </div>

  </div>
</template>