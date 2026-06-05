// Servicio de órdenes: simula el registro de una compra.
// Al migrar a Firestore, aquí se creará un documento en la colección "ordenes"
// y se devolverá el ID generado por la base de datos.
export const crearOrden = (orden) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const id = 'ORD-' + Date.now().toString(36).toUpperCase()
      resolve({ id, ...orden })
    }, 900)
  })
