import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // El patrón del curso reinicia el estado de carga (setCargando(true)) al
      // inicio del useEffect para mostrar el loader en cada navegación, tal como
      // pide la consigna. La regla nueva del plugin lo desaconseja; la apagamos
      // de forma intencional para mantener ese patrón.
      'react-hooks/set-state-in-effect': 'off',
    },
  },
])
