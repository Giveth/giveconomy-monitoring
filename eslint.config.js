const unusedImports = require('eslint-plugin-unused-imports');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

exports.default = [
  {
    ignores: ['src/model/generated', 'lib', 'db/migrations'],
  },
  {
    files: ['**/*.ts', 'src/processor/contractEventProcessor/givToken.ts'], // Apply rules to TypeScript files
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        tsconfigRootDir: process.cwd(),
        project: './tsconfig.json', // Reference your tsconfig.json
      },
    },
    plugins: {
      'unused-imports': unusedImports,
      '@typescript-eslint': typescriptEslint,
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'error',
    },
  },
  eslintPluginPrettierRecommended,
];
