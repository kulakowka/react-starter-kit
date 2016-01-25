'use strict'

import compress from 'compression'
import config from './webpack.config'
import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'


const app = express()

if (app.get('env') === 'production') {
  app.use(compress())
  app.use(express.static(__dirname + '/public'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })
} else {
  const compiler = webpack(config)
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      chunkModules: false,
      chunks: false,
      colors: true,
      hash: false,
      modules: false,
      timings: true
    }
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
  app.get('*', function response (req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')))
    res.end()
  })
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers
app.use((err, req, res, next) => {
  let error = app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error
  })
})

module.exports = app
