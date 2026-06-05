import { Row, Col } from 'react-bootstrap'
import Item from '../Item/Item'

// Componente de presentación: recibe los productos por props y los renderiza
// en una grilla responsiva. Cada elemento lleva una key única (el id).
const ItemList = ({ productos }) => (
  <Row xs={1} sm={2} md={3} lg={4} className="g-4">
    {productos.map((producto) => (
      <Col key={producto.id}>
        <Item producto={producto} />
      </Col>
    ))}
  </Row>
)

export default ItemList
