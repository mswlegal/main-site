import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...fixupConfigRules(
    compat.extends(
      'prettier',
      'plugin:react/jsx-runtime',
      'plugin:jsx-a11y/recommended',
      'plugin:react-hooks/recommended',
      'eslint:recommended',
      'plugin:react/recommended'
    )
  ),
  {
    plugins: {
      prettier,
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      import: importPlugin
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        process: true
      },
      parser: babelParser,
      ecmaVersion: 12,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          impliedStrict: true,
          jsx: true
        }
      }
    },
    settings: {
      react: {
        createClass: 'createReactClass',
        pragma: 'React',
        fragment: 'Fragment',
        version: 'detect',
        flowVersion: '0.53'
      },

      'import/resolver': {
        node: {
          moduleDirectory: ['node_modules', 'src/']
        }
      },

      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false
        }
      ]
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: false
        }
      ],
      'prettier/prettier': [
        'warn',
        {
          bracketSpacing: true,
          printWidth: 110,
          singleQuote: true,
          trailingComma: 'none',
          tabWidth: 2,
          useTabs: false,
          endOfLine: 'auto'
        }
      ],
      'react/react-in-jsx-scope': 'off',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'], // Define your desired order of groups
          pathGroups: [
            {
              pattern: 'components',
              group: 'internal'
            },
            {
              pattern: 'common',
              group: 'internal'
            }
          ],
          pathGroupsExcludedImportTypes: ['internal'], // Prevent certain import types from being considered when applying path groups
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ]
    }
  }
];
