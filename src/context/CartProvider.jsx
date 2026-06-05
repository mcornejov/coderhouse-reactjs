import { useState } from 'react'
import { CartContext } from './CartContext'

// Proveedor del estado global del carrito. Expone los items y las acciones para
// manipularlos desde cualquier componente mediante el hook useCart.
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const agregarAlCarrito = (producto, cantidad) => {
    setItems((prev) => {
      const existente = prev.find((item) => item.id === producto.id)
      if (existente) {
        // Si ya está en el carrito, solo sumamos la cantidad.
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      }
      return [...prev, { ...producto, cantidad }]
    })
  }

  const eliminarDelCarrito = (id) =>
    setItems((prev) => prev.filter((item) => item.id !== id))

  const vaciarCarrito = () => setItems([])

  const estaEnCarrito = (id) => items.some((item) => item.id === id)

  const cantidadTotal = () =>
    items.reduce((acumulado, item) => acumulado + item.cantidad, 0)

  const precioTotal = () =>
    items.reduce((acumulado, item) => acumulado + item.precio * item.cantidad, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        estaEnCarrito,
        cantidadTotal,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
