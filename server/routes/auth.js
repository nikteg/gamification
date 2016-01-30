import Router from 'koa-router'
import koajwt from 'koa-jwt'
import koabody from 'koa-body'
import convert from 'koa-convert'
import required from '../util/required'
import config from '../../config'
import conn from '../conn'

const auth = new Router()

auth.use(convert(koabody()))

auth.post('/', async (ctx, next) => {
  let params = required('username', 'password')(ctx.request.body)

  let result = await conn.one('SELECT username FROM "user" WHERE username = $1', params.username)
  let token = koajwt.sign({ username: result.username }, config.secret)

  ctx.body = { token: token }
})

export default auth
