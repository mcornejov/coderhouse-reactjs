import { Spinner } from 'react-bootstrap'

// Indicador de carga reutilizable, usado durante las consultas asíncronas.
const Loader = ({ mensaje = 'Cargando...' }) => (
  <div className="text-center my-5">
    <Spinner animation="border" role="status" style={{ color: '#6f4e37' }} />
    <p className="mt-3 text-secondary">{mensaje}</p>
  </div>
)

export default Loader
