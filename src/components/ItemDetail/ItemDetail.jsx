import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Badge, Button } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { formatearPrecio } from '../../utils/formato'

// Vista en detalle de un producto. Mientras no se agrega al carrito muestra el
// ItemCount; una vez agregado, este se oculta y aparecen los accesos al carrito
// y al catálogo.
const ItemDetail = ({ producto }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState(0)
  const { agregarAlCarrito } = useCart()

  const handleAgregar = (cantidad) => {
    setCantidadAgregada(cantidad)
    agregarAlCarrito(producto, cantidad)
  }

  return (
    <Row className="g-4 align-items-center">
      <Col md={6}>
        <img
          src={producto.img}
          alt={producto.nombre}
          className="img-fluid rounded shadow-sm w-100"
        />
      </Col>
      <Col md={6}>
        <Badge bg="secondary" className="mb-2 text-capitalize">
          {producto.categoria}
        </Badge>
        <h1 className="h3 text-cafe">{producto.nombre}</h1>
        <p className="text-secondary">{producto.descripcion}</p>
        <p className="fs-3 fw-bold">{formatearPrecio(producto.precio)}</p>
        <p className="text-muted">Stock disponible: {producto.stock}</p>

        {cantidadAgregada === 0 ? (
          <ItemCount stock={producto.stock} inicial={1} onAgregar={handleAgregar} />
        ) : (
          <div>
            <p className="text-success fw-semibold">
              Agregaste {cantidadAgregada} unidad(es) al carrito.
            </p>
            <div className="d-flex gap-2">
              <Button as={Link} to="/cart" variant="dark">
                Finalizar compra
              </Button>
              <Button as={Link} to="/" variant="outline-dark">
                Seguir comprando
              </Button>
            </div>
          </div>
        )}
      </Col>
    </Row>
  )
}

export default ItemDetail
