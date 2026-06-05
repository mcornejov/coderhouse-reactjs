import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

// Página para rutas inexistentes (404).
const NotFound = () => (
  <Container className="py-5 text-center">
    <h1 className="display-4 text-cafe">404</h1>
    <p className="text-secondary">La página que buscas no existe.</p>
    <Button as={Link} to="/" variant="dark">
      Volver al inicio
    </Button>
  </Container>
)

export default NotFound
