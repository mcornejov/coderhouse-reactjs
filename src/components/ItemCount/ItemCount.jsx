import { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

// Selector de cantidad con validación de mínimo (1) y máximo (stock disponible).
// Notifica al componente padre la cantidad elegida mediante onAgregar.
const ItemCount = ({ stock, inicial = 1, onAgregar }) => {
  const [cantidad, setCantidad] = useState(inicial)

  const restar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1)
  }

  const sumar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1)
  }

  if (stock === 0) {
    return <p className="text-danger fw-semibold">Producto sin stock</p>
  }

  return (
    <div>
      <ButtonGroup className="mb-3" aria-label="Selector de cantidad">
        <Button variant="outline-dark" onClick={restar} disabled={cantidad <= 1}>
          −
        </Button>
        <Button variant="light" disabled style={{ minWidth: '3rem' }}>
          {cantidad}
        </Button>
        <Button variant="outline-dark" onClick={sumar} disabled={cantidad >= stock}>
          +
        </Button>
      </ButtonGroup>
      <div>
        <Button variant="dark" onClick={() => onAgregar(cantidad)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  )
}

export default ItemCount
