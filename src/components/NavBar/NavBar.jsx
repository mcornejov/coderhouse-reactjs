import { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { getCategorias } from '../../services/productService'
import CartWidget from '../CartWidget/CartWidget'

// Barra de navegación: marca, enlaces internos (Inicio, Tienda, Categorías,
// Informe) y el CartWidget. Las categorías se cargan dinámicamente del servicio.
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
            <Nav.Link as={NavLink} to="/tienda">
              Tienda
            </Nav.Link>
            <NavDropdown title="Categorías" id="nav-categorias">
              {categorias.map((categoria) => (
                <NavDropdown.Item
                  as={NavLink}
                  key={categoria.id}
                  to={`/category/${categoria.id}`}
                >
                  {categoria.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={NavLink} to="/informe">
              Informe
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
