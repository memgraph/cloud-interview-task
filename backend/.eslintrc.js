module.exports = {
  'root': true,
  'env': {
    'es6': true,
  },
  'extends': [
    'google',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    "project": './tsconfig.eslint.json'
  },
  'plugins': [
    '@typescript-eslint',
    'prettier',
    'jest',
  ],
  'rules': {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'all',
        'printWidth': 120,
      },
    ],
    'no-console': ['warn', { allow: ['warn'] }],
    'max-len': ['error', {'code': 120, 'ignoreUrls': true, 'ignoreStrings': true, 'ignoreRegExpLiterals': true}],
    'eqeqeq': 'warn',
    'new-cap': 'off',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    '@typescript-eslint/no-floating-promises': ['warn'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-interface': ['warn'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'padding-line-between-statements': [
      'error',
      { 'blankLine': 'always', 'prev': ['function'], 'next':['function'] },
      { 'blankLine': 'always', 'prev': 'multiline-block-like', 'next':'multiline-block-like' },
      { 'blankLine': 'always', 'prev': '*', 'next':'export' },
      { 'blankLine': 'always', 'prev': 'import', 'next':['const', 'let', 'var','class','block-like'] },
    ],
    'brace-style': ['error', '1tbs'],
    'curly': ['error', 'all'],
    'jest/no-standalone-expect': 'off',
    'jest/expect-expect': 'off',
    'jest/no-commented-out-tests': 'off',
    'jest/no-done-callback': 'off',
  },
};
