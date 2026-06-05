// Ejemplo (mock) de documento de orden.
// Representa el objeto que arma CheckoutForm al confirmar una compra y que, con
// Firestore, se registrará como documento en la colección "ordenes". El id y la
// fecha son ilustrativos: en la operación real los genera el checkout / la base
// de datos. Sirve como referencia de la forma esperada del documento de orden.
export const ordenEjemplo = {
  id: 'ORD-LXY8QZ4A',
  comprador: {
    nombre: 'María Pérez',
    email: 'maria@example.com',
    telefono: '+56 9 1234 5678',
  },
  items: [
    { id: '1', nombre: 'Aurora Clásico', precio: 7990, cantidad: 2 },
    { id: '8', nombre: 'Prensa Francesa 600 ml', precio: 19990, cantidad: 1 },
  ],
  total: 35970,
  fecha: '05-06-2026 10:24:11',
}
