import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { useCart } from '../../context/CartContext'
import { crearOrden } from '../../services/orderService'
import { formatearPrecio } from '../../utils/formato'
import Loader from '../Loader/Loader'

// Formulario de checkout: toma los datos del comprador, genera la orden (mock)
// y muestra el ID generado. Maneja estados de envío, orden creada y carrito vacío.
const CheckoutForm = () => {
  const { items, precioTotal, vaciarCarrito } = useCart()
  const [datos, setDatos] = useState({ nombre: '', email: '', telefono: '' })
  const [enviando, setEnviando] = useState(false)
  const [ordenId, setOrdenId] = useState(null)

  const handleChange = (evento) => {
    setDatos({ ...datos, [evento.target.name]: evento.target.value })
  }

  const handleSubmit = (evento) => {
    evento.preventDefault()
    setEnviando(true)

    const orden = {
      comprador: datos,
      items: items.map(({ id, nombre, precio, cantidad }) => ({ id, nombre, precio, cantidad })),
      total: precioTotal(),
      fecha: new Date().toLocaleString('es-CL'),
    }

    crearOrden(orden)
      .then((ordenGenerada) => {
        setOrdenId(ordenGenerada.id)
        vaciarCarrito()
      })
      .finally(() => setEnviando(false))
  }

  if (enviando) {
    return (
      <Container className="py-5">
        <Loader mensaje="Generando tu orden..." />
      </Container>
    )
  }

  if (ordenId) {
    return (
      <Container className="py-5" style={{ maxWidth: 600 }}>
        <Alert variant="success">
          <Alert.Heading>¡Gracias por tu compra! ☕</Alert.Heading>
          <p className="mb-1">Tu orden fue registrada con éxito. Guarda este código:</p>
          <p className="fs-5 fw-bold mb-0">{ordenId}</p>
        </Alert>
        <Button as={Link} to="/" variant="dark">
          Volver al catálogo
        </Button>
      </Container>
    )
  }

  if (items.length === 0) {
    return (
      <Container className="py-5 text-center">
        <p className="text-secondary">No hay productos para procesar.</p>
        <Button as={Link} to="/" variant="dark">
          Ir al catálogo
        </Button>
      </Container>
    )
  }

  return (
    <Container className="py-4" style={{ maxWidth: 600 }}>
      <h1 className="h3 text-cafe mb-4">Finalizar compra</h1>
      <p className="text-secondary">
        Total a pagar:{' '}
        <span className="fw-bold text-cafe">{formatearPrecio(precioTotal())}</span>
      </p>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control name="nombre" value={datos.nombre} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={datos.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="telefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control name="telefono" value={datos.telefono} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="dark" size="lg">
          Confirmar orden
        </Button>
      </Form>
    </Container>
  )
}

export default CheckoutForm
