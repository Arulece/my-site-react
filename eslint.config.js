const js = require('@eslint/js');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const prettierPlugin = require('eslint-plugin-prettier');
const eslintConfigPrettier = require('eslint-config-prettier');
const globals = require('globals');

module.exports = [
  // Ignore build artifacts
  {
    ignores: ['dist/**', 'build/**'],
  },

  // Base recommended ESLint rules (equivalent to "eslint:recommended")
  js.configs.recommended,

  // React, hooks, Prettier and modern JS configuration
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React recommended rules (equivalent to "plugin:react/recommended")
      ...reactPlugin.configs.recommended.rules,

      // React hooks recommended rules
      ...reactHooksPlugin.configs.recommended.rules,

      // Run Prettier as an ESLint rule
      ...prettierPlugin.configs.recommended.rules,

      // Custom rules & standards
      'no-unused-vars': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: 'error',
      'consistent-return': 'error',
      'react/prop-types': 'off',

      // New JSX runtime – React import not required in scope
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Jest test files: enable Jest globals like describe/it/expect
  {
    files: ['**/*.test.{js,jsx}', '**/__tests__/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },

  // Disable ESLint rules that would conflict with Prettier
  eslintConfigPrettier,
];



