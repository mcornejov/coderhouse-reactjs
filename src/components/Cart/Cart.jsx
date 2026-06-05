import { Link } from 'react-router-dom'
import { Container, Button, Table } from 'react-bootstrap'
import { useCart } from '../../context/CartContext'
import CartItem from './CartItem'
import { formatearPrecio } from '../../utils/formato'

// Vista del carrito. Renderizado condicional: si está vacío muestra un mensaje
// con acceso al catálogo; si tiene productos, los lista con su total.
const Cart = () => {
  const { items, vaciarCarrito, precioTotal } = useCart()

  if (items.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h1 className="h3 text-cafe mb-3">Tu carrito está vacío</h1>
        <p className="text-secondary">Agrega productos de nuestro catálogo para comenzar.</p>
        <Button as={Link} to="/" variant="dark">
          Ir al catálogo
        </Button>
      </Container>
    )
  }

  return (
    <Container className="py-4">
      <h1 className="h3 text-cafe mb-4">Tu carrito</h1>
      <Table responsive className="align-middle bg-white rounded shadow-sm">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-3">
        <Button variant="outline-danger" onClick={vaciarCarrito}>
          Vaciar carrito
        </Button>
        <div className="text-end">
          <p className="fs-4 mb-2">
            Total: <span className="fw-bold text-cafe">{formatearPrecio(precioTotal())}</span>
          </p>
          <Button as={Link} to="/checkout" variant="dark" size="lg">
            Finalizar compra
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Cart
