import { Button } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import { useCart } from '../../context/CartContext'
import { formatearPrecio } from '../../utils/formato'

// Fila del carrito: muestra un producto con su cantidad, subtotal y la opción
// de eliminarlo.
const CartItem = ({ item }) => {
  const { eliminarDelCarrito } = useCart()

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center gap-2">
          <img
            src={item.img}
            alt={item.nombre}
            width="56"
            height="40"
            className="rounded"
            style={{ objectFit: 'cover' }}
          />
          <span>{item.nombre}</span>
        </div>
      </td>
      <td>{formatearPrecio(item.precio)}</td>
      <td>{item.cantidad}</td>
      <td>{formatearPrecio(item.precio * item.cantidad)}</td>
      <td>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => eliminarDelCarrito(item.id)}
          aria-label={`Eliminar ${item.nombre}`}
        >
          <BsTrash />
        </Button>
      </td>
    </tr>
  )
}

export default CartItem
