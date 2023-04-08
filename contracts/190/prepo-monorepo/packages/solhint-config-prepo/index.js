module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'compiler-version': ['error', '0.8.7'],
    'code-complexity': ['warn', 7],
    'function-max-lines': ['warn', 50],
    'max-line-length': ['warn', 79],
    'constructor-syntax': 'warn',
    'func-param-name-mixedcase': 'warn',
    'modifier-name-mixedcase': 'warn',
    'not-rely-on-time': 'off',
    ordering: 'warn',
    'func-visibility': ['warn', { ignoreConstructors: true }],
  },
}
