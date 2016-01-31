import config from '../../config'

export default function (err) { throw (config.env === 'development') ? err : new Error('Internal server error') }
