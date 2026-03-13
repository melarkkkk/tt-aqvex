export type Product = {
  id: string
  slug: string
  name: string
  image: string
  category: string

  price: number
  old_price: number
  discount_percent: number

  currency: string
  rating: number
  reviews_count: number

  in_stock: boolean
  selected_volume_id: string

  volumes: Volume[]
}

type Volume = {
  id: string
  label: string
  in_stock: boolean
}