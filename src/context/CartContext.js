import { createContext, useContext } from 'react'

// Definición del contexto del carrito y hook de acceso.
// Se mantiene separado del provider para no mezclar la creación del contexto
// con un componente (mejor compatibilidad con Fast Refresh).
export const CartContext = createContext()

// Hook de acceso al carrito: simplifica el consumo del contexto.
export const useCart = () => useContext(CartContext)
