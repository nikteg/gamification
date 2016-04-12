import Router from 'koa-router'
import koajwt from 'koa-jwt'
import required from '../util/required'
import config from '../../config'
import conn from '../conn'
import { hash } from 'crypto-promise'
import throwDebug from '../util/throwDebug'

const hashPassword = async (password) => {
  const h = await hash('md5')(password)

  return h.toString('hex')
}

const getUser = async (username, password) => {
  const hash = await hashPassword(password)

  return conn.first('id', 'username').from('user').where({ username, hash })
    .then(user => {
      if (!user) {
        throw new Error('User not found')
      }

      return user
    })
}

const createUser = async (username, password) => {
  const hash = await hashPassword(password)

  return conn('user').insert({ username, hash }).then(res =>
    conn.first('id', 'username').from('user').where({ username }))
}

const tokenize = (id, username) => koajwt.sign({ id: id, username: username }, config.secret, { expiresIn: '1d' })

const auth = new Router()

auth.post('/login', async (ctx, next) => {
  const params = required('username', 'password')(ctx.request.body)

  await getUser(params.username, params.password)
    .then(res => ctx.body = { token: tokenize(res.id, res.username) }, err => throwDebug(err))
})

auth.post('/create', async (ctx, next) => {
  const params = required('username', 'password')(ctx.request.body)

  await createUser(params.username, params.password)
    .then(res => ctx.body = { token: tokenize(res.id, res.username) }, err => {
      if (err.message.includes('UNIQUE')) {
        if (err.message.includes('user.username')) {
          throw new Error('Username already taken')
        }
      }

      throwDebug(err)
    })
})

export default auth
