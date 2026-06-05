import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { FaStore, FaFileAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// Repositorio público y aplicación desplegada del proyecto.
const REPO_URL = 'https://github.com/mcornejov/coderhouse-reactjs'
const DEPLOY_URL = 'https://mcornejov.github.io/coderhouse-reactjs/'

// Portada del proyecto: presenta el trabajo, los datos de la entrega y un índice
// de accesos rápidos (tienda, informe técnico, repositorio y deploy) para que
// cada parte del rubric se ubique de inmediato.
const Inicio = () => (
  <>
    <section className="portada-hero text-center text-white">
      <Container className="py-5">
        <p className="text-uppercase mb-2 portada-kicker">
          CoderHouse · Desarrollo React JS
        </p>
        <h1 className="display-4 fw-bold mb-2">☕ Café Aurora</h1>
        <p className="lead mb-1">Tienda online (e-commerce SPA) construida con React</p>
        <p className="mb-4 opacity-75">Proyecto Final Integrador · Unidad 1</p>
        <div className="d-flex gap-2 justify-content-center flex-wrap mb-4">
          <Button as={Link} to="/tienda" variant="light" size="lg">
            <FaStore className="me-2" />
            Ver la tienda
          </Button>
          <Button as={Link} to="/informe" variant="outline-light" size="lg">
            <FaFileAlt className="me-2" />
            Informe técnico
          </Button>
        </div>
        <p className="mb-0 small opacity-75">
          Estudiante: <strong>Miguel Andrés Cornejo Vargas</strong> · Junio de 2026
        </p>
      </Container>
    </section>

    <Container className="py-5">
      <h2 className="h4 text-cafe text-center mb-4">Contenido de la entrega</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <Card className="h-100 shadow-sm text-center acceso-card">
            <Card.Body className="d-flex flex-column">
              <FaStore className="fs-1 text-cafe mb-3 mx-auto" />
              <Card.Title className="h6">Tienda</Card.Title>
              <Card.Text className="small text-secondary">
                Catálogo, detalle de producto, carrito y checkout en funcionamiento.
              </Card.Text>
              <Button as={Link} to="/tienda" variant="dark" size="sm" className="mt-auto">
                Ir a la tienda
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 shadow-sm text-center acceso-card">
            <Card.Body className="d-flex flex-column">
              <FaFileAlt className="fs-1 text-cafe mb-3 mx-auto" />
              <Card.Title className="h6">Informe técnico</Card.Title>
              <Card.Text className="small text-secondary">
                Tecnologías, arquitectura, Context, ruteo, Firestore y conclusiones.
              </Card.Text>
              <Button as={Link} to="/informe" variant="dark" size="sm" className="mt-auto">
                Leer el informe
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 shadow-sm text-center acceso-card">
            <Card.Body className="d-flex flex-column">
              <FaGithub className="fs-1 text-cafe mb-3 mx-auto" />
              <Card.Title className="h6">Repositorio</Card.Title>
              <Card.Text className="small text-secondary">
                Código fuente público en GitHub, con guía de instalación.
              </Card.Text>
              <Button
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                variant="dark"
                size="sm"
                className="mt-auto"
              >
                Abrir en GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 shadow-sm text-center acceso-card">
            <Card.Body className="d-flex flex-column">
              <FaExternalLinkAlt className="fs-1 text-cafe mb-3 mx-auto" />
              <Card.Title className="h6">App desplegada</Card.Title>
              <Card.Text className="small text-secondary">
                Aplicación publicada y accesible en GitHub Pages.
              </Card.Text>
              <Button
                href={DEPLOY_URL}
                target="_blank"
                rel="noreferrer"
                variant="dark"
                size="sm"
                className="mt-auto"
              >
                Ver el deploy
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col lg={9}>
          <h2 className="h4 text-cafe mb-3">Presentación del proyecto</h2>
          <p className="text-secondary">
            Este proyecto es el Front End de una <strong>Single Page Application</strong> de
            e-commerce construida con React. La tienda, <strong>Café Aurora</strong>, ofrece un
            catálogo de café y accesorios e implementa el flujo completo de compra: exploración
            del catálogo, vista en detalle de cada producto, administración de un carrito de
            compras y un checkout que genera una orden con su identificador.
          </p>
          <p className="text-secondary mb-0">
            La navegación se resuelve con React Router (sin recargas), el estado del carrito se
            administra con Context API y el catálogo se sirve desde una capa de servicios
            asíncrona, preparada para migrar a Firebase / Firestore. El detalle técnico completo,
            la guía de instalación y las observaciones finales están en el{' '}
            <Link to="/informe">informe técnico</Link>.
          </p>
        </Col>
      </Row>
    </Container>
  </>
)

export default Inicio
