module.exports = {
    'env': {
      'browser': true,
      'node': true,
      'es6': true
    },
    "parserOptions": {
      "ecmaVersion": 8,
      "sourceType": "module"
    },
    'extends': 'eslint:recommended',
    'rules': {
      'indent': [
        'error',
        4
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        'error',
        'always'
      ],
      'no-console': 'off',
      'no-trailing-spaces': 'error'
    },
    "globals": {
      "describe": false,
      "beforeEach": false,
      "afterEach": false,
      "jasmine": false,
      "it": false,
      "expect": false
    }
  }