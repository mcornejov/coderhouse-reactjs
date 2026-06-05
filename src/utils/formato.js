// Formatea un número como precio en pesos chilenos (ej: 7990 -> "$7.990").
export const formatearPrecio = (valor) =>
  valor.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  })
