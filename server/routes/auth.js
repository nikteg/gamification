import Router from 'koa-router'
import koajwt from 'koa-jwt'
import koabody from 'koa-body'
import convert from 'koa-convert'
import required from '../util/required'

export default (secret) => {
  const auth = new Router()

  auth.use(convert(koabody()))

  auth.post('/auth', (ctx, next) => {
    let params = required('username', 'password')(ctx.request.body)
    let token = koajwt.sign({ username: params.username }, secret)

    ctx.body = { token: token }
  })

  return auth
}
