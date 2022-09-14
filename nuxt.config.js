import webpack from 'webpack';

import { getRoutes } from './routes';

export default () => ({
  telemetry: false,
  ssr: process.env.SSR_ENABLED || true,
  dev: process.env.NUXT_APP_ENV !== 'production',
  server: {
    port: process.env.NUXT_APP_PORT,
    host: '0.0.0.0',
  },
  head: {
    title: 'Dashboard',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Dashboard',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimal-ui' },
    ],
  },
  link: [
    {
      rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32',
    },
  ],
  loading: { color: '#000' },
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
  ],
  css: [
    '@/assets/css/main.css',
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NUXT_APP_ENV === 'production' ? { cssnano: {} } : {}),
      },
    },
    optimizeCSS: true,
    parallel: true,
    extend(cfg) {
      cfg.devtool = 'source-map';
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': JSON.stringify({
          version: require('./package.json').version,
          lastCommit: process.env.LAST_COMMIT || '',
        }),
      }),
    ],
  },
  router: {
    prefetchLinks: false,
    extendRoutes(routes) {
      getRoutes()
        .forEach((route) => routes.unshift(route));
    },
  },
});
