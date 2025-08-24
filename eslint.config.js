import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',

      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/brace-style': ['error', 'stroustrup'],
      '@stylistic/operator-linebreak': ['error', 'after'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
    },
  },
]
