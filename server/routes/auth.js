import Router from 'koa-router'
import koajwt from 'koa-jwt'
import koabody from 'koa-body'
import convert from 'koa-convert'
import required from '../util/required'
import config from '../../config'

const auth = new Router()

auth.use(convert(koabody()))

auth.post('/', (ctx, next) => {
  let params = required('username', 'password')(ctx.request.body)
  let token = koajwt.sign({ username: params.username }, config.secret)

  ctx.body = { token: token }
})

export default auth
