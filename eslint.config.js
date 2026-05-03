import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // --- REGRAS DO PEDRO ---

      // 1. Forçar Aspas Simples
      quotes: ['error', 'single'],

      // 2. Forçar Arrow Functions (Transforma function Name() em const Name = ())
      'func-style': ['error', 'expression'],
      'prefer-arrow-callback': 'error',

      // 3. Ignorar erro de import com @ (Roteamento de pasta)
      'import/no-unresolved': 'off',

      // 4. Regras Rígidas de Qualidade de Código
      'no-var': 'error', // Proíbe o uso de var, exige let ou const
      'prefer-const': 'error', // Exige const se a variável não for reatribuída
      'no-unused-vars': 'error', // Dá erro se criar uma variável e não usar
      
      // 5. Regras Rígidas para o React
      'react/prop-types': 'off', // (Desligado pois geralmente usamos TypeScript para isso)
      'react/jsx-no-useless-fragment': 'error', // Proíbe Fragments vazios desnecessários (<></>)
      'react/self-closing-comp': 'error', // Exige <Component /> em vez de <Component></Component> se não houver filhos
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }], // Proíbe chaves desnecessárias em strings, ex: className={"classe"}
      'react/function-component-definition': ['error', { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }], // Força componentes React a serem arrow functions

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
