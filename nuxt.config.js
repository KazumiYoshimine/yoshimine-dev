// const webpack = require('webpack')
import webpack from 'webpack'
// import { pkg } from './package'

export default {
  // mode: 'spa',
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || 'タブのタイトル',
    title: 'MyHomepage',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    // script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }],
    // script: [
    //   {
    //     src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    //     type: 'text/javascript'

    //   }
    // ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        // ブラウザのタイトルTabのicon
        href: '/building-regular.svg',
        // href: '/icon-run.svg'
        // href: 'https://firebasestorage.googleapis.com/v0/b/hi-223af.appspot.com/o/icon-run.svg?alt=media&token=6f6172d8-5aff-4450-80b5-bd6410eaadc3'
        // href: process.env.NUXT_CONFIG_JS_ICON
      },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff',
  },
  /*
   ** Global CSS
   */
  css: ['~/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/my-import', '~/plugins/my-inject', '~/plugins/firebase.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/dotenv',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
    ],
    extend(config, ctx) {},
    /*
    以下は * core- js / modules / es6 関連エラーのため追加
    参考： https://tech.moyashidaisuke.com/entry/nuxt-core-js-error
     */
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
  },
}
