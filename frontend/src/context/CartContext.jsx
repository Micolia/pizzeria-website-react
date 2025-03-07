import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = ({ id, price, name, img }) => {
    setCart((prevCart) => {
      const foundProduct = prevCart.find((p) => p.id === id)

      if (foundProduct) {
        return prevCart.map((p) =>
          p.id === id ? { ...p, count: p.count + 1 } : p
        )
      }

      return [...prevCart, { id, price, name, img, count: 1 }]
    })
  }

  const increase = (id) => {
    setCart((prevCart) =>
      prevCart.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    )
  }

  const decrease = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === id ? { ...p, count: Math.max(0, p.count - 1) } : p
        )
        .filter((p) => p.count > 0) // Rimuove i prodotti con count = 0
    )
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, increase, decrease }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
