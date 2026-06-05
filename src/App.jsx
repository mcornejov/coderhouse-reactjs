import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Inicio from './components/Inicio/Inicio'
import Informe from './components/Informe/Informe'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CheckoutForm from './components/CheckoutForm/CheckoutForm'
import NotFound from './components/NotFound/NotFound'

// Define la estructura de la SPA y las rutas. La navegación ocurre sin recargar
// el navegador gracias a React Router. La portada (Inicio) y el informe técnico
// conviven con la tienda (catálogo, detalle, carrito y checkout).
function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/informe" element={<Informe />} />
          <Route path="/tienda" element={<ItemListContainer saludo="Tienda Café Aurora" />} />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer saludo="Tienda Café Aurora" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer-cafe text-center py-3 mt-5">
        <small>© 2026 Café Aurora · Proyecto educativo CoderHouse</small>
      </footer>
    </>
  )
}

export default App
