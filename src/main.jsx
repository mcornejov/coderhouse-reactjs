import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartProvider'

// Punto de entrada: envuelve la app con el router (SPA) y el proveedor del
// carrito (estado global), de modo que ambos estén disponibles en todo el árbol.
// basename alinea las rutas con el subdirectorio donde se publica la app
// (en GitHub Pages, /coderhouse-reactjs/; en desarrollo, "/").
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
