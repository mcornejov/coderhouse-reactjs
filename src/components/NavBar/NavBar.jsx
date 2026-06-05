import { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { getCategorias } from '../../services/productService'
import CartWidget from '../CartWidget/CartWidget'

// Barra de navegación: marca, enlaces a las categorías y el CartWidget.
// Las categorías se cargan de forma dinámica desde el servicio.
const NavBar = () => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    getCategorias().then((data) => setCategorias(data))
  }, [])

  return (
    <Navbar expand="lg" variant="dark" sticky="top" className="navbar-cafe">
      <Container>
        <Navbar.Brand as={Link} to="/">☕ Café Aurora</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-cafe" />
        <Navbar.Collapse id="nav-cafe">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            {categorias.map((categoria) => (
              <Nav.Link as={NavLink} key={categoria.id} to={`/category/${categoria.id}`}>
                {categoria.label}
              </Nav.Link>
            ))}
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
