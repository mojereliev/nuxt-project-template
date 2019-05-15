const modulesConfig = require('config');

const path = require('path');
const SvgStore = require('webpack-svgstore-plugin');

const isJsRule = rule => {
  return rule.test.toString() === '/\\.js$/i';
};

const isPugRule = rule => {
  return rule.test.toString() === '/\\.pug$/i';
};

const isStylusRule = rule => {
  return rule.test.toString() === '/\\.styl(us)?$/i';
};

const stylusResourcesLoader = {
  loader: 'stylus-loader',
  options: {
    import: path.join(__dirname, 'assets/stylesheets/common/global.styl')
  }
};

const title = 'Title';
const keywords = '';
const description = '';
const ogImage = '';

module.exports = {
  head: {
    title: title,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {name: 'msapplication-TileColor', content: '#000000'},
      {name: 'msapplication-TileImage', content: '/mstile-144x144.png'},
      {name: 'theme-color', content: '#000000'},
      {hid: 'description', name: 'description', content: description},
      {hid: 'keywords', name: 'keywords', content: keywords},
      {hid: 'ogtitle', property: 'og:title', content: title},
      {hid: 'ogdescription', property: 'og:description', content: description},
      {hid: 'ogimage', property: 'og:image', content: ogImage}
    ],
    link: [
      {rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-touch-icon-57x57.png'},
      {rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-touch-icon-60x60.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-touch-icon-72x72.png'},
      {rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon-76x76.png'},
      {rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-touch-icon-114x114.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png'},
      {rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-touch-icon-144x144.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png'},
      {rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/x-icon', sizes: '192x192', href: '/favicon-192x192.png'},
      {rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'manifest', href: '/manifest.json'},
      {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000'}
    ]
  },
  generate: {
    interval: 100,
    minify: {
      collapseWhitespace: false
    },
    dir: 'dist'
  },
  modules: [
    '@nuxtjs/axios'
  ],
  plugins: [
    '~plugins/axios',
    '~plugins/filters.js',
    '~plugins/svgstore.js',
    '~plugins/gsap.js',
    '~plugins/vee-validate.js',
    '~plugins/vue-touch.js',
    'assets/helpers/animations.js',
    'assets/helpers/colorHelper.js'
  ],
  router: {
    middleware: [
      'theme'
    ]
  },
  axios: modulesConfig.get('axios'),
  css: [
    '~assets/stylesheets/application.styl'
  ],
  loading: false,
  build: {
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining']
    },
    extractCSS: true,
    vendor: [
      'babel-polyfill'
    ],
    plugins: [
      new SvgStore({
        svgoOptions: {
          plugins: [
            {
              removeTitle: true,
              removeViewBox: true,
              sortAttrs: true,
              addClassesToSVGElement: true,
              addAttributesToSVGElement: true,
              removeStyleElement: true,
              convertStyleToAttrs: true
            }
          ]
        },
        prefix: 'icon-'
      })
    ],
    extend(config) {
      config.module.rules.forEach(rule => {
        if (isJsRule(rule)) {
          rule.exclude = [];
          rule.include = [
            path.join(__dirname, 'pages'),
            path.join(__dirname, 'components'),
            path.join(__dirname, 'plugins'),
            path.join(__dirname, 'layouts'),
            path.join(__dirname, 'assets'),
            path.join(__dirname, 'store'),
            path.join(__dirname, '.nuxt'),
            /node_modules\/smooth-scrolling/
          ];
        }
        if (isPugRule(rule)) {
          rule.oneOf.forEach(item => {
            item.use.forEach(use => {
              if (use.loader === 'pug-plain-loader') {
                use.options = {
                  ...use.options,
                  basedir: path.join(__dirname, 'blocks')
                };
              }
            });
          });
        }
        if (isStylusRule(rule)) {
          rule.oneOf.forEach(item => {
            item.use.push(stylusResourcesLoader);
          });
        }
      });

      config.plugins.forEach(rule => {
        if (rule.constructor.name === 'UglifyJsPlugin') {
          rule.options.exclude = /\/node_modules\/smooth-scrolling/;
          rule.options.mangle = {
            except: ['Smooth']
          };
        }
      });
    }
  }
};
