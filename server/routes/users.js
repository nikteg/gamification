import Router from 'koa-router'
import required from '../util/required'
import conn from '../conn'
import throwDebug from '../util/throwDebug'

const getUser = (username) => {
  return conn.first('id', 'username').from('user').where({ username })
    .then(user => {
      if (!user) {
        throw new Error('User not found')
      }

      return user
    })
}

const getUsers = () => {
  return conn.select('id', 'username').from('user').orderBy('id')
}

const users = new Router()

users.get('/', async (ctx, next) => {
  await getUsers()
    .then(res => ctx.body = res, err => throwDebug(err))
})

users.get('/:username', async (ctx, next) => {
  const params = required('username')(ctx.params)

  await getUser(params.username)
    .then(res => ctx.body = res, err => throwDebug(err))
})

export default users
