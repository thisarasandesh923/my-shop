export interface Product {
  id: number
  title: string
  price: number
  rating: number
  thumbnail: string
  category: string
  description: string
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}