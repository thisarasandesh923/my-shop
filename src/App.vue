<script setup lang="ts">
import { ref, onMounted,computed } from 'vue'

import type { Product, ProductsResponse } from './types/products'
import ProductCard from './components/ProductCard.vue'
import NavBar from './components/NavBar.vue'
import FilterBar from './components/FilterBar.vue'
import ProductModal from './components/ProductModal.vue'
import Footer from './components/Footer.vue'
import HeroBanner from './components/HeroBanner.vue'

const products =    ref<Product[]>([])
const loading =ref(true)
const searchQuery = ref('')
const selectedCategory = ref('all')
const categories = ref<string[]>([])
const showModal = ref(false)
const selectedProduct = ref<Product | null>(null)
const filteredProducts = computed(() => {
  let result = products.value

  if (selectedCategory.value !== 'all') {
    result = result.filter(product => 
      product.category === selectedCategory.value
    )
  }

  if (searchQuery.value !== '') {
    result = result.filter(product =>
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  return result
})


const openModal = (product: Product) => {
  selectedProduct.value = product
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedProduct.value = null
}

onMounted(async () => {
  const response = await fetch('https://dummyjson.com/products?limit=100')
  const data: ProductsResponse = await response.json()
  products.value = data.products
  categories.value = [...new Set(data.products.map(p => p.category))]
  loading.value = false
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    
   
    <NavBar @search="searchQuery = $event" />
    <HeroBanner />

    <div class="p-8">
      <div v-if="loading">
        <p class="text-center text-gray-500">Loading products...</p>
      </div>

      <div v-else>
        <FilterBar 
          :categories="categories"
          :selected="selectedCategory"
          @select="selectedCategory = $event"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard 
            v-for="product in filteredProducts" 
            :key="product.id"
            :product="product"
            @click="openModal(product)"
            class="cursor-pointer"
          />
        </div>
      </div>
    </div>

    <ProductModal
      v-if="showModal && selectedProduct"
      :product="selectedProduct"
      @close="closeModal"
    />
    <Footer />
  </div>
</template>