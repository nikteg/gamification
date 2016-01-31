import Router from 'koa-router'
import koajwt from 'koa-jwt'
import required from '../util/required'
import config from '../../config'
import conn from '../conn'
import { hash } from 'crypto-promise'
import throwDebug from '../util/throwDebug'

const hashPassword = (password) => hash('md5')(password).toString('hex')

const getUser = async (username, password) => {
  return conn.one('SELECT id, username FROM "user" WHERE username = ${username} AND password = ${hash}', {
    username: username,
    hash: await hashPassword(password)
  })
}

const createUser = async (username, password, email) => {
  return conn.one('INSERT INTO "user" (username, password) VALUES (${username}, ${hash}) RETURNING id, username', {
    username: username,
    hash: await hashPassword(password)
  })
}

const tokenize = (id, username) => koajwt.sign({ id: id, username: username }, config.secret)

const auth = new Router()

auth.post('/login', async (ctx, next) => {
  const params = required('username', 'password')(ctx.request.body)

  await getUser(params.username, params.password)
    .then(res => ctx.body = { token: tokenize(res.id, res.username) }, err => {
      if (err.message.includes('No data')) {
        throw new Error('Invalid username and/or password')
      }

      throwDebug(err)
    })
})

auth.post('/create', async (ctx, next) => {
  console.log(ctx.request.body)
  const params = required('username', 'password')(ctx.request.body)

  await createUser(params.username, params.password)
    .then(res => ctx.body = { token: tokenize(res.id, res.username) }, err => {
      if (err.message.includes('duplicate key')) {
        if (err.message.includes('username')) {
          throw new Error('Username already taken')
        }
      }

      throwDebug(err)
    })
})

export default auth
