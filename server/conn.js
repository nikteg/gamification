import connect from 'pg-promise'

const pgp = connect()
const conString = process.env.DATABASE_URL

export default pgp(`${conString}?ssl=true`)
