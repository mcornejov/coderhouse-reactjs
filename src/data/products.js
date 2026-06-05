// Catálogo mock de Café Aurora.
// Más adelante esta data se reemplaza por una colección de Firestore.
//
// Las imágenes son ilustraciones SVG locales (en src/assets/productos). Se
// importan para que el bundler resuelva la ruta final con el base correcto
// (incluido el subdirectorio de GitHub Pages). Al migrar a Firestore, el campo
// img pasará a ser una URL almacenada en la base de datos.
import imgAuroraClasico from '../assets/productos/aurora-clasico.svg'
import imgAuroraIntenso from '../assets/productos/aurora-intenso.svg'
import imgAuroraDescafeinado from '../assets/productos/aurora-descafeinado.svg'
import imgMolidoCasa from '../assets/productos/molido-casa.svg'
import imgMolidoEspresso from '../assets/productos/molido-espresso.svg'
import imgCapsulasAurora from '../assets/productos/capsulas-aurora.svg'
import imgCapsulasIntenso from '../assets/productos/capsulas-intenso.svg'
import imgPrensaFrancesa from '../assets/productos/prensa-francesa.svg'
import imgMolinilloManual from '../assets/productos/molinillo-manual.svg'
import imgTazaAurora from '../assets/productos/taza-aurora.svg'

export const categorias = [
  { id: 'granos', label: 'Granos' },
  { id: 'molido', label: 'Café molido' },
  { id: 'capsulas', label: 'Cápsulas' },
  { id: 'accesorios', label: 'Accesorios' },
]

export const productos = [
  {
    id: '1',
    nombre: 'Aurora Clásico',
    categoria: 'granos',
    precio: 7990,
    stock: 25,
    descripcion: 'Blend de la casa en grano, tueste medio. Notas a chocolate y caramelo, ideal para todos los días.',
    img: imgAuroraClasico,
  },
  {
    id: '2',
    nombre: 'Aurora Intenso',
    categoria: 'granos',
    precio: 8990,
    stock: 18,
    descripcion: 'Grano de tueste oscuro y cuerpo robusto. Perfecto para quienes buscan un espresso con carácter.',
    img: imgAuroraIntenso,
  },
  {
    id: '3',
    nombre: 'Aurora Descafeinado',
    categoria: 'granos',
    precio: 8490,
    stock: 12,
    descripcion: 'Todo el sabor de Aurora sin cafeína. Proceso al agua que conserva los aromas del grano.',
    img: imgAuroraDescafeinado,
  },
  {
    id: '4',
    nombre: 'Molido Casa',
    categoria: 'molido',
    precio: 6990,
    stock: 30,
    descripcion: 'Café molido de molienda media, versátil para cafetera de filtro o prensa francesa.',
    img: imgMolidoCasa,
  },
  {
    id: '5',
    nombre: 'Molido Espresso',
    categoria: 'molido',
    precio: 7490,
    stock: 20,
    descripcion: 'Molienda fina pensada para máquinas de espresso. Crema densa y final dulce.',
    img: imgMolidoEspresso,
  },
  {
    id: '6',
    nombre: 'Cápsulas Aurora x10',
    categoria: 'capsulas',
    precio: 4990,
    stock: 40,
    descripcion: 'Caja de 10 cápsulas compatibles. La intensidad equilibrada de Aurora en un solo gesto.',
    img: imgCapsulasAurora,
  },
  {
    id: '7',
    nombre: 'Cápsulas Intenso x10',
    categoria: 'capsulas',
    precio: 5490,
    stock: 15,
    descripcion: 'Caja de 10 cápsulas de intensidad alta para amantes del café fuerte.',
    img: imgCapsulasIntenso,
  },
  {
    id: '8',
    nombre: 'Prensa Francesa 600 ml',
    categoria: 'accesorios',
    precio: 19990,
    stock: 8,
    descripcion: 'Prensa de vidrio borosilicato y acero inoxidable. Prepara hasta 4 tazas con cuerpo y aroma.',
    img: imgPrensaFrancesa,
  },
  {
    id: '9',
    nombre: 'Molinillo Manual',
    categoria: 'accesorios',
    precio: 24990,
    stock: 5,
    descripcion: 'Molinillo con fresas cerámicas y molienda regulable. Muele tu café justo antes de prepararlo.',
    img: imgMolinilloManual,
  },
  {
    id: '10',
    nombre: 'Taza Aurora Cerámica',
    categoria: 'accesorios',
    precio: 5990,
    stock: 22,
    descripcion: 'Taza de cerámica esmaltada de 300 ml con el logo de Café Aurora. Mantiene la temperatura.',
    img: imgTazaAurora,
  },
]
