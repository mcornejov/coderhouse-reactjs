# Café Aurora · Tienda (React)

Front End de una **Single Page Application** de e-commerce desarrollada con **React + Vite**
como Proyecto Final Integrador del curso de ReactJS (CoderHouse). La tienda recrea el universo
de marca **Café Aurora**: catálogo de café y accesorios, carrito de compras y checkout.

## Stack

- **React 19** + **Vite** (base del proyecto y servidor de desarrollo con HMR).
- **React Router** para la navegación SPA (sin recarga del navegador).
- **Context API** para el estado global del carrito.
- **Bootstrap** + **React-Bootstrap** para la interfaz.
- **react-icons** para la iconografía.
- Gestor de paquetes: **pnpm**.

## Funcionalidades

- Catálogo de productos con filtrado por categoría (`ItemListContainer` → `ItemList` → `Item`).
- Vista en detalle de cada producto (`ItemDetailContainer` → `ItemDetail`).
- `ItemCount` con validación de cantidad mínima (1) y máxima (stock disponible); se oculta al
  agregar el producto al carrito.
- Carrito con estado global vía Context (`Cart` → `CartItem`): productos, cantidades, subtotales
  y total final. `CartWidget` muestra el total de unidades en la NavBar.
- Checkout (`CheckoutForm`) que genera una orden y entrega el ID de la compra.
- Renderizado condicional: loaders durante la carga, mensajes de "carrito vacío" y "sin stock".

## Scripts

```bash
pnpm install   # instalar dependencias
pnpm dev       # servidor de desarrollo (http://localhost:5173)
pnpm build     # build de producción (dist/)
pnpm preview   # previsualizar el build
pnpm lint      # análisis estático con ESLint
pnpm deploy    # build y publicación en GitHub Pages
```

## Despliegue

Aplicación publicada en **GitHub Pages**:
**https://mcornejov.github.io/coderhouse-reactjs/**

El despliegue se realiza con `pnpm deploy`, que genera el build y lo publica en la
rama `gh-pages`. Como la app se sirve bajo un subdirectorio, Vite usa `base` y React
Router un `basename` (`import.meta.env.BASE_URL`); además se genera un `404.html`
(copia de `index.html`) para que el ruteo de la SPA funcione al recargar o entrar
directo a una ruta profunda.

## Estructura

```
src/
├── components/      # Componentes (contenedores y de presentación)
│   ├── NavBar/  CartWidget/  Loader/
│   ├── ItemListContainer/  ItemList/  Item/
│   ├── ItemDetailContainer/  ItemDetail/  ItemCount/
│   ├── Cart/ (Cart + CartItem)  CheckoutForm/  NotFound/
├── context/         # CartContext (contexto + hook) y CartProvider
├── services/        # productService y orderService (carga asíncrona con Promesas)
├── data/            # Catálogo mock (Café Aurora)
└── utils/           # Formato de precios (CLP)
```

## Próxima etapa: Firebase / Firestore

El catálogo y las órdenes se sirven hoy desde datos mock con Promesas. La capa de servicios
(`productService` y `orderService`) está aislada para que la migración a **Firestore** no
requiera cambios en los componentes: bastará con reemplazar la implementación interna de esas
funciones por consultas a la base de datos.
