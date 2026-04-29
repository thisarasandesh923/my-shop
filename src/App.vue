<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Product, ProductsResponse } from './types/products'
import ProductCard from './components/ProductCard.vue'
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
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in products" 
          :key="product.id"
          :product="product"
        />
      </div>
    </div>

  </div>
</template>