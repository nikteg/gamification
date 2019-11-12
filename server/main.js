import Koa from 'koa'
import convert from 'koa-convert'
import webpack from 'webpack'
import webpackConfig from '../build/webpack.config'
import historyApiFallback from 'koa-connect-history-api-fallback'
import serve from 'koa-static'
import _debug from 'debug'
import config from '../config'
import Router from 'koa-router'
import koajwt from 'koa-jwt'
import koabody from 'koa-body'
import conn from './conn'
import multipart from './middleware/multipart'

// Routes
import auth from './routes/auth'
import users from './routes/users'
import forceHTTPS from './util/forceHTTPS'

const debug = _debug('app:server')
const paths = config.utils_paths
const app = new Koa()

if (config.env !== 'development') {
  app.use(forceHTTPS())
}

app.use(convert(koabody({ multipart: true })))
app.use(multipart)

const api = new Router({ prefix: '/api' })

api.use('/auth', auth.routes())
api.use('/auth', auth.allowedMethods())
api.use('/users', users.routes())
api.use('/users', users.allowedMethods())
api.use(convert(koajwt({ secret: config.secret })))

api.get('/hello', (ctx, next) => {
  ctx.body = ctx.state || 'No state'
})

api.get('/two', async ctx => {
  const answers = await conn.raw('SELECT 1+1 as answer')

  ctx.body = answers[0]
})

// Error handling
app.use(async (ctx, next) => {
  try {
    await next() // next is now a function
  } catch (err) {
    ctx.body = { message: err.message }
    ctx.status = err.status || 500
  }
})

app.use(api.routes())
app.use(api.allowedMethods())

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement isomorphic
// rendering, you'll want to remove this middleware.
app.use(convert(historyApiFallback({
  verbose: false
})))

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  // Enable webpack-dev and webpack-hot middleware
  const { publicPath } = webpackConfig.output

  app.use(require('./middleware/webpack-dev')(compiler, publicPath))
  app.use(require('./middleware/webpack-hmr')(compiler))

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(convert(serve(paths.client('static'))))
} else {
  debug(
    'Server is being run outside of live development mode. This starter kit ' +
    'does not provide any production-ready server functionality. To learn ' +
    'more about deployment strategies, check out the "deployment" section ' +
    'in the README.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(convert(serve(paths.base(config.dir_dist))))
}

export default app
