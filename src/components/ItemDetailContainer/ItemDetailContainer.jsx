import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { getProductoPorId } from '../../services/productService'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'

// Contenedor del detalle: obtiene el producto por id desde el servicio y maneja
// los estados de carga y error antes de mostrar ItemDetail.
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    setCargando(true)
    setError(null)
    getProductoPorId(id)
      .then((data) => setProducto(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [id])

  return (
    <Container className="py-4">
      {cargando ? (
        <Loader mensaje="Cargando producto..." />
      ) : error ? (
        <p className="text-center text-danger my-5">{error}</p>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </Container>
  )
}

export default ItemDetailContainer
