<script setup lang="ts">
import { ref, onMounted,computed } from 'vue'

import type { Product, ProductsResponse } from './types/products'
import ProductCard from './components/ProductCard.vue'
import NavBar from './components/NavBar.vue'

const products =    ref<Product[]>([])
const loading =ref(true)
const searchQuery = ref('')
const filteredProducts = computed(() => {
  if (searchQuery.value === '') {
    return products.value
  }
  return products.value.filter(product =>
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

onMounted(async () => {
  const response = await fetch('https://dummyjson.com/products?limit=20')
  const data: ProductsResponse = await response.json()
  products.value = data.products
  loading.value = false
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    
    <NavBar @search="searchQuery = $event" />

    <div class="p-8">
      <div v-if="loading">
        <p class="text-center text-gray-500">Loading products...</p>
      </div>

      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard 
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>

  </div>
</template>