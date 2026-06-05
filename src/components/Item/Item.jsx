import { Link } from 'react-router-dom'
import { Card, Button, Badge } from 'react-bootstrap'
import { formatearPrecio } from '../../utils/formato'

// Tarjeta de presentación de un producto dentro del listado.
const Item = ({ producto }) => (
  <Card className="h-100 shadow-sm item-card">
    <Card.Img variant="top" src={producto.img} alt={producto.nombre} />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="fs-6">{producto.nombre}</Card.Title>
      <Badge bg="secondary" className="align-self-start mb-2 text-capitalize">
        {producto.categoria}
      </Badge>
      <p className="fw-bold fs-5 text-cafe mb-3">{formatearPrecio(producto.precio)}</p>
      <Button as={Link} to={`/item/${producto.id}`} variant="dark" className="mt-auto">
        Ver detalle
      </Button>
    </Card.Body>
  </Card>
)

export default Item
