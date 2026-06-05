import { Link } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { useCart } from '../../context/CartContext'

// Ícono del carrito con la cantidad total de unidades agregadas.
// El contador solo se muestra cuando hay al menos un producto.
const CartWidget = () => {
  const { cantidadTotal } = useCart()
  const total = cantidadTotal()

  return (
    <Link to="/cart" className="position-relative text-light fs-4 text-decoration-none" aria-label="Ir al carrito">
      <BsCart3 />
      {total > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
          {total}
        </span>
      )}
    </Link>
  )
}

export default CartWidget
