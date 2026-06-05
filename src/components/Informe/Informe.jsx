import { Container, Row, Col, Table, Badge } from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const REPO_URL = 'https://github.com/mcornejov/coderhouse-reactjs'
const DEPLOY_URL = 'https://mcornejov.github.io/coderhouse-reactjs/'

// Índice del informe: cada entrada apunta a una sección de la página.
const INDICE = [
  ['presentacion', '1. Presentación'],
  ['objetivos', '2. Objetivos'],
  ['stack', '3. Stack y tecnologías'],
  ['arquitectura', '4. Arquitectura y componentes'],
  ['context', '5. Estado global con Context API'],
  ['ruteo', '6. Navegación con React Router'],
  ['itemcount', '7. ItemCount y validación de stock'],
  ['checkout', '8. Checkout y generación de orden'],
  ['firestore', '9. Firestore y ejemplo de orden'],
  ['ux', '10. Experiencia de usuario'],
  ['enlaces', '11. Repositorio y deploy'],
  ['instalacion', '12. Instalación y ejecución'],
  ['conclusiones', '13. Observaciones finales'],
]

// Estructura del árbol de componentes (se muestra en un bloque monoespaciado).
const ARBOL = `App
 ├── NavBar
 │    └── CartWidget
 ├── Inicio (portada)
 ├── Informe (este informe)
 ├── ItemListContainer        (lógica: carga del catálogo)
 │    └── ItemList            (presentación: grilla)
 │         └── Item           (tarjeta de producto)
 ├── ItemDetailContainer      (lógica: carga del producto por id)
 │    └── ItemDetail
 │         └── ItemCount      (selección de cantidad con validación de stock)
 ├── Cart
 │    └── CartItem
 └── CheckoutForm`

// Ejemplo de documento de orden (el objeto que genera el checkout y que se
// registrará como documento en la colección "ordenes" de Firestore).
const ORDEN_EJEMPLO = `{
  "id": "ORD-LXY8QZ4A",
  "comprador": {
    "nombre": "María Pérez",
    "email": "maria@example.com",
    "telefono": "+56 9 1234 5678"
  },
  "items": [
    { "id": "1", "nombre": "Aurora Clásico", "precio": 7990, "cantidad": 2 },
    { "id": "8", "nombre": "Prensa Francesa 600 ml", "precio": 19990, "cantidad": 1 }
  ],
  "total": 35970,
  "fecha": "05-06-2026 10:24:11"
}`

const INSTALACION = `git clone https://github.com/mcornejov/coderhouse-reactjs
cd coderhouse-reactjs
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo (http://localhost:5173)
pnpm build       # build de producción (carpeta dist/)
pnpm deploy      # publicar en GitHub Pages`

// Informe técnico del proyecto. Presenta, en secciones claramente identificables
// y con un índice navegable, todos los puntos del rubric: presentación, detalle
// técnico, modelo de datos en Firestore, enlaces, instalación y conclusiones.
const Informe = () => (
  <Container className="py-4 informe">
    <header className="mb-4">
      <Badge bg="secondary" className="mb-2">Proyecto Final Integrador · Unidad 1</Badge>
      <h1 className="h2 text-cafe mb-1">Informe técnico — Café Aurora</h1>
      <p className="text-secondary mb-0">
        Tienda online (e-commerce SPA) con React · Estudiante: Miguel Andrés Cornejo Vargas ·
        CoderHouse, junio de 2026
      </p>
    </header>

    <Row>
      {/* Índice navegable */}
      <Col lg={3} className="mb-4">
        <nav className="informe-indice">
          <p className="fw-bold text-cafe mb-2">Índice</p>
          <ul className="list-unstyled small mb-0">
            {INDICE.map(([id, titulo]) => (
              <li key={id} className="mb-1">
                <a href={`#${id}`} className="link-dark text-decoration-none">{titulo}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Col>

      {/* Contenido */}
      <Col lg={9}>
        <section id="presentacion" className="mb-5">
          <h2 className="h4 text-cafe">1. Presentación</h2>
          <p className="text-secondary">
            Café Aurora es el Front End de una Single Page Application de e-commerce desarrollada
            con React. Permite explorar un catálogo de café y accesorios, ver el detalle de cada
            producto, administrar un carrito de compras y completar un checkout que genera una
            orden con su identificador. La temática da continuidad a la marca Café Aurora trabajada
            en los cursos anteriores del programa.
          </p>
        </section>

        <section id="objetivos" className="mb-5">
          <h2 className="h4 text-cafe">2. Objetivos</h2>
          <ul className="text-secondary">
            <li>Desarrollar el front-end de una webapp de tipo e-commerce con React.</li>
            <li>Aplicar los patrones y conceptos de React: Virtual DOM, componentes, hooks, Context y ruteo.</li>
            <li>Aplicar buenas prácticas de componentización, manejo de estado y navegación en una SPA.</li>
            <li>Dejar la arquitectura preparada para incorporar Firestore como base de datos de productos y órdenes.</li>
          </ul>
        </section>

        <section id="stack" className="mb-5">
          <h2 className="h4 text-cafe">3. Stack y tecnologías</h2>
          <Table responsive bordered size="sm" className="bg-white">
            <thead>
              <tr><th>Herramienta</th><th>Rol en el proyecto</th></tr>
            </thead>
            <tbody>
              <tr><td>React 19 + Vite</td><td>Base del proyecto y servidor de desarrollo con recarga en caliente (HMR).</td></tr>
              <tr><td>React Router</td><td>Navegación entre vistas manteniendo el modelo SPA (sin recarga del navegador).</td></tr>
              <tr><td>Context API</td><td>Estado global del carrito, accesible desde cualquier componente.</td></tr>
              <tr><td>Bootstrap + React-Bootstrap</td><td>Sistema de estilos y componentes de interfaz responsivos.</td></tr>
              <tr><td>react-icons</td><td>Iconografía (carrito, accesos, redes).</td></tr>
              <tr><td>pnpm</td><td>Gestor de paquetes.</td></tr>
            </tbody>
          </Table>
        </section>

        <section id="arquitectura" className="mb-5">
          <h2 className="h4 text-cafe">4. Arquitectura y componentes</h2>
          <p className="text-secondary">
            La interfaz se organiza como un árbol de componentes que separa los contenedores
            (lógica y estado) de los componentes de presentación (reciben datos por props y los
            muestran). Esta separación de responsabilidades mantiene el código modular y reutilizable.
          </p>
          <pre className="informe-code">{ARBOL}</pre>
        </section>

        <section id="context" className="mb-5">
          <h2 className="h4 text-cafe">5. Estado global con Context API</h2>
          <p className="text-secondary">
            El carrito se administra con la Context API. <code>CartProvider</code> envuelve la
            aplicación y expone el estado y las acciones; cualquier componente las consume con el
            hook personalizado <code>useCart</code>, evitando pasar props a través de muchos niveles
            (<em>prop drilling</em>). El valor del contexto incluye:
          </p>
          <ul className="text-secondary">
            <li><code>items</code> — productos en el carrito (con su cantidad).</li>
            <li><code>agregarAlCarrito(producto, cantidad)</code> — agrega o acumula cantidad.</li>
            <li><code>eliminarDelCarrito(id)</code> y <code>vaciarCarrito()</code>.</li>
            <li><code>estaEnCarrito(id)</code>, <code>cantidadTotal()</code> y <code>precioTotal()</code>.</li>
          </ul>
        </section>

        <section id="ruteo" className="mb-5">
          <h2 className="h4 text-cafe">6. Navegación con React Router</h2>
          <p className="text-secondary">
            Las rutas se definen de forma declarativa y la navegación ocurre sin recargar el
            navegador. <code>BrowserRouter</code> provee el contexto de routing en la raíz y la
            NavBar genera los enlaces a Inicio, Tienda, Categorías e Informe.
          </p>
          <Table responsive bordered size="sm" className="bg-white">
            <thead><tr><th>Ruta</th><th>Vista</th></tr></thead>
            <tbody>
              <tr><td><code>/</code></td><td>Portada / Inicio</td></tr>
              <tr><td><code>/tienda</code></td><td>Catálogo completo</td></tr>
              <tr><td><code>/category/:categoryId</code></td><td>Catálogo filtrado por categoría</td></tr>
              <tr><td><code>/item/:id</code></td><td>Detalle del producto</td></tr>
              <tr><td><code>/cart</code></td><td>Carrito de compras</td></tr>
              <tr><td><code>/checkout</code></td><td>Formulario de compra</td></tr>
              <tr><td><code>/informe</code></td><td>Informe técnico</td></tr>
              <tr><td><code>*</code></td><td>Página 404</td></tr>
            </tbody>
          </Table>
        </section>

        <section id="itemcount" className="mb-5">
          <h2 className="h4 text-cafe">7. ItemCount y validación de stock</h2>
          <p className="text-secondary">
            El componente <code>ItemCount</code> permite seleccionar la cantidad a agregar,
            validando un mínimo de 1 y un máximo igual al stock disponible (los botones se
            deshabilitan en los límites). Una vez agregado el producto, <code>ItemCount</code> se
            oculta en el detalle y se ofrecen accesos al carrito y al catálogo.
          </p>
        </section>

        <section id="checkout" className="mb-5">
          <h2 className="h4 text-cafe">8. Checkout y generación de orden</h2>
          <p className="text-secondary">
            <code>CheckoutForm</code> toma los datos del comprador y, al confirmar, arma la orden
            con el detalle de la compra (comprador, items, cantidades, total y fecha) y la envía a
            la capa de servicios, que devuelve el <strong>ID de la orden</strong> mostrado al
            usuario. La capa de servicios simula hoy la latencia con Promesas y mantiene la misma
            firma con la que consultará Firestore.
          </p>
        </section>

        <section id="firestore" className="mb-5">
          <h2 className="h4 text-cafe">9. Firestore y ejemplo de orden</h2>
          <p className="text-secondary">
            El modelo de datos en <strong>Firestore</strong> contempla dos colecciones:
          </p>
          <ul className="text-secondary">
            <li>
              <strong><code>productos</code></strong> — un documento por producto (nombre,
              categoría, precio, stock, descripción e imagen). Se lee para renderizar el catálogo
              y el detalle.
            </li>
            <li>
              <strong><code>ordenes</code></strong> — un documento por compra confirmada, con los
              datos del comprador, los productos adquiridos, las cantidades, el precio total y la
              fecha de la operación.
            </li>
          </ul>
          <p className="text-secondary mb-1">
            Ejemplo del documento de orden que genera el checkout y que se registra en la colección
            <code> ordenes</code>:
          </p>
          <pre className="informe-code">{ORDEN_EJEMPLO}</pre>
          <p className="text-secondary mb-0">
            La lógica de acceso a datos está aislada en la capa de servicios
            (<code>productService</code> y <code>orderService</code>), por lo que la migración del
            catálogo y de las órdenes a Firestore no afecta a los componentes: solo cambia la
            implementación interna de esas funciones.
          </p>
        </section>

        <section id="ux" className="mb-5">
          <h2 className="h4 text-cafe">10. Experiencia de usuario</h2>
          <p className="text-secondary">Se usa renderizado condicional para informar el estado de la aplicación:</p>
          <ul className="text-secondary">
            <li>Loaders (spinner) durante la carga de productos y del detalle.</li>
            <li>Mensaje de “carrito vacío” con acceso al catálogo.</li>
            <li>Aviso de “producto sin stock” en el detalle.</li>
            <li>Confirmación de compra con el ID de la orden generada.</li>
          </ul>
        </section>

        <section id="enlaces" className="mb-5">
          <h2 className="h4 text-cafe">11. Repositorio y deploy</h2>
          <ul className="list-unstyled text-secondary mb-0">
            <li className="mb-2">
              <FaGithub className="me-2" />
              Repositorio (GitHub):{' '}
              <a href={REPO_URL} target="_blank" rel="noreferrer">{REPO_URL}</a>
            </li>
            <li>
              <FaExternalLinkAlt className="me-2" />
              Aplicación desplegada:{' '}
              <a href={DEPLOY_URL} target="_blank" rel="noreferrer">{DEPLOY_URL}</a>
            </li>
          </ul>
        </section>

        <section id="instalacion" className="mb-5">
          <h2 className="h4 text-cafe">12. Instalación y ejecución</h2>
          <p className="text-secondary">
            El proyecto usa <strong>pnpm</strong>. Desde cero:
          </p>
          <pre className="informe-code">{INSTALACION}</pre>
          <p className="text-secondary mb-0">
            El proyecto compila sin errores ni warnings (build y ESLint verificados).
          </p>
        </section>

        <section id="conclusiones" className="mb-2">
          <h2 className="h4 text-cafe">13. Observaciones finales</h2>
          <p className="text-secondary mb-1"><strong>Decisiones de diseño:</strong></p>
          <ul className="text-secondary">
            <li>Patrón contenedor / presentacional para separar lógica de presentación.</li>
            <li>Context API en lugar de <em>prop drilling</em> para el carrito global.</li>
            <li>Capa de servicios con Promesas que aísla el origen de datos: permite pasar de mock a Firestore sin tocar los componentes.</li>
            <li>Ilustraciones SVG locales de marca en vez de un servicio externo de imágenes, para no depender de terceros.</li>
          </ul>
          <p className="text-secondary mb-1"><strong>Dificultades resueltas:</strong></p>
          <ul className="text-secondary mb-0">
            <li>
              <strong>Ruteo en GitHub Pages:</strong> al servirse bajo un subdirectorio, se
              configuró el <code>base</code> de Vite y el <code>basename</code> de React Router, y
              se generó un <code>404.html</code> (copia de <code>index.html</code>) para que las
              rutas profundas no se rompan al recargar.
            </li>
            <li>
              <strong>Imágenes poco fiables:</strong> se reemplazó un servicio externo de
              placeholders por ilustraciones SVG locales, livianas y siempre disponibles.
            </li>
            <li>
              <strong>Cantidades en el carrito:</strong> al agregar un producto ya presente se
              acumula la cantidad en su línea en lugar de duplicarla.
            </li>
          </ul>
        </section>
      </Col>
    </Row>
  </Container>
)

export default Informe
