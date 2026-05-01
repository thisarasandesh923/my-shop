import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from '../types/products'

export interface CartItem {
  product: Product
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => 
      sum + (item.product.price * item.quantity), 0
    ).toFixed(2)
  })

  const addToCart = (product: Product) => {
    const existing = items.value.find(item => item.product.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ product, quantity: 1 })
    }
  }

  const removeFromCart = (productId: number) => {
    items.value = items.value.filter(item => item.product.id !== productId)
  }

  return { items, totalItems, totalPrice, addToCart, removeFromCart }
})