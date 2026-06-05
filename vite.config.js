import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// En GitHub Pages la app se publica bajo el subdirectorio del repositorio.
// En desarrollo (pnpm dev) Vite usa "/" automáticamente.
const base = '/coderhouse-reactjs/'

// Tras el build crea un 404.html (copia de index.html) para que el ruteo de la
// SPA siga funcionando al recargar o entrar directo a una ruta profunda: GitHub
// Pages sirve 404.html y React Router resuelve la ruta en el cliente.
function fallback404() {
  let outDir = 'dist'
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), fallback404()],
})
