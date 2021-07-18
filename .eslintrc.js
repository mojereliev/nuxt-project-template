module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
    'import/extensions': [
      '.js',
    ],
    'import/core-modules': [
      // for disable "{{ moduleName }} should be listed in the project's dependencies" error
      'vue',
      'vuex',
      'consola',
      'axios',
    ],
  },
  extends: [
    '@nuxtjs',
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'func-names': 0,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'import/extensions': ['error', 'always', {
      vue: 'never',
      js: 'never',
    }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'max-len': ['error', { code: 300 }],
    'no-bitwise': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [2, { props: false }],
    'no-plusplus': 0,
    'no-useless-escape': 0,
    'nuxt/no-cjs-in-config': 'off',
    'vue/max-attributes-per-line': [2, {
      singleline: 3,
      multiline: {
        max: 3,
        allowFirstLine: true,
      },
    }],
    'vue/no-v-html': 0,
  },
};
