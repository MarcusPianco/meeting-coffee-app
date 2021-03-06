module.exports = {
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "react": {
        "pragma": "React",
        "version": "detect"
      }
  },
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension':[
          'warn',{ extensions: ['jsx', '.js','ts', 'tsx']}
      ],
      'import/prefer-default-export': 'off'
  },
};
