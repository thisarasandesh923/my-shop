<script setup lang="ts">
import type { Product } from '../types/products'
import { useCartStore } from '../stores/cartStore'

defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  close: []
}>()

const cartStore = useCartStore()
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    
    <div class="bg-white rounded-lg p-6 max-w-lg w-full mx-4 relative">
      
      <button 
        @click="emit('close')"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
      >
        ✕
      </button>

      <img 
        :src="product.thumbnail" 
        :alt="product.title"
        class="w-full h-64 object-cover rounded-lg mb-4"
      />

      <h2 class="text-2xl font-bold mb-2">{{ product.title }}</h2>
      
      <p class="text-gray-600 mb-4">{{ product.description }}</p>
      
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-blue-600">${{ product.price }}</span>
        <span class="text-yellow-500">⭐ {{ product.rating }}</span>
      </div>

      <p class="text-gray-500 mt-2 capitalize">
        Category: {{ product.category }}
      </p>

      <button
  @click="cartStore.addToCart(product)"
  class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
>
  Add to Cart 🛒
</button>


    </div>

  </div>
</template>