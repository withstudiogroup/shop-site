import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, ProductColor } from '@/types'

export interface CartItem {
  id: string
  productId: string
  product: Product
  color: ProductColor
  quantity: number
}

interface CartState {
  items: CartItem[]
  addItem: (product: Product, color: ProductColor, quantity?: number) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, color, quantity = 1) => {
        const { items } = get()
        const existingItem = items.find(
          (item) => item.productId === product.id && item.color.hex === color.hex
        )

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === existingItem.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          })
        } else {
          const newItem: CartItem = {
            id: `${product.id}-${color.hex}-${Date.now()}`,
            productId: product.id,
            product,
            color,
            quantity,
          }
          set({ items: [...items, newItem] })
        }
      },

      removeItem: (itemId) => {
        set({ items: get().items.filter((item) => item.id !== itemId) })
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId)
          return
        }
        set({
          items: get().items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        })
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )
      },
    }),
    {
      name: 'technova-cart',
    }
  )
)
