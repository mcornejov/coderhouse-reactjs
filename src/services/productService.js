// Servicio de productos: simula la carga asíncrona del catálogo con Promesas.
// La firma de estas funciones se mantendrá al migrar a Firestore, de modo que
// los componentes que las consumen no necesiten cambios.
import { productos, categorias } from '../data/products'

const DEMORA = 700 // ms, simula la latencia de red

export const getProductos = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(productos), DEMORA)
  })

export const getProductosPorCategoria = (categoriaId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((producto) => producto.categoria === categoriaId))
    }, DEMORA)
  })

export const getProductoPorId = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find((item) => item.id === id)
      if (producto) {
        resolve(producto)
      } else {
        reject(new Error('No encontramos el producto que buscas.'))
      }
    }, DEMORA)
  })

export const getCategorias = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(categorias), 300)
  })
