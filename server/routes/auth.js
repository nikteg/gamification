import Router from 'koa-router'
import koajwt from 'koa-jwt'
import koabody from 'koa-body'
import convert from 'koa-convert'
import required from '../util/required'
import config from '../../config'
import conn from '../conn'
import { hash } from 'crypto-promise'

const auth = new Router()

auth.use(convert(koabody({ multipart: true })))

auth.post('/login', async (ctx, next) => {
  let params = required('username', 'password')(ctx.request.body)

  const h = await hash('md5')(params.password)

  try {
    let result = await conn.one('SELECT id, username FROM "user" WHERE username = ${username} AND password = ${hash}', {
      username: params.username,
      hash: h.toString('hex')
    })

    let token = koajwt.sign({ id: result.id, username: result.username }, config.secret)

    ctx.body = { token: token }
  } catch (err) {
    if (err.message.includes('No data')) {
      throw new Error('Invalid username and/or password')
    }
  }
})

auth.post('/create', async (ctx, next) => {
  let params = required('username', 'password')(ctx.request.body)

  const h = await hash('md5')(params.password)

  try {
    await conn.none('INSERT INTO "user" (username, password) VALUES (${username}, ${hash})', {
      username: params.username,
      hash: h.toString('hex')
    })

    ctx.body = 'OK'
  } catch (err) {
    if (err.message.includes('duplicate key')) {
      if (err.message.includes('username')) {
        throw new Error('Username already taken')
      }
    }
  }
})

export default auth
