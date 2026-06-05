import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { getProductos, getProductosPorCategoria } from '../../services/productService'
import { categorias } from '../../data/products'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'

// Componente contenedor: maneja la lógica de carga (estado y efecto) y delega
// la presentación en ItemList. Si la URL trae una categoría, filtra por ella.
const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setCargando(true)
    const consulta = categoryId
      ? getProductosPorCategoria(categoryId)
      : getProductos()

    consulta
      .then((data) => setProductos(data))
      .finally(() => setCargando(false))
  }, [categoryId])

  const nombreCategoria = categorias.find((c) => c.id === categoryId)?.label

  return (
    <Container className="py-4">
      <h1 className="h3 mb-1 text-cafe">{saludo}</h1>
      <p className="text-secondary mb-4">
        {categoryId ? `Categoría: ${nombreCategoria ?? categoryId}` : 'Nuestro catálogo completo'}
      </p>

      {cargando ? (
        <Loader mensaje="Cargando productos..." />
      ) : productos.length === 0 ? (
        <p className="text-center my-5 text-secondary">No hay productos en esta categoría.</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </Container>
  )
}

export default ItemListContainer
