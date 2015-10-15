module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      { pattern: 'spec.bundle.js', watched: true }
    ],

    exclude: [],

    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.html$/, loader: 'raw' },
          { test: /\.styl$/, loader: 'style!css!stylus' },
          { test: /\.css/, loader: 'style!css' },
          { test: /\.(png|jpg|jpeg)$/, loader: 'file' },
          { test: /\.(coffee|js)$/, loader: 'babel?stage=1', exclude: [/client\/lib/, /node_modules/] }
        ]
      },

      stylus: {
        use: [require('jeet')(), require('rupture')()]
      }
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['mocha'],

    port: 3000,

    colors: true,

    loglevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true

  })
};