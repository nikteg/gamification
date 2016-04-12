import React from 'react'
import ReactDOM from 'react-dom'
import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import routes from './routes'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import { resizeScreen } from './actions/screen'
import { loginSuccess, logoutUser } from './actions/auth'
import decode from 'jwt-decode'
import moment from 'moment'

const historyConfig = { basename: __BASENAME__ }
const history = useRouterHistory(createHistory)(historyConfig)

const initialState = window.__INITIAL_STATE__
const store = configureStore({ initialState, history })

window.addEventListener('resize', () => {
  store.dispatch(resizeScreen())
})

const token = localStorage.getItem('token')
if (token !== null) {
  const decoded = decode(token)
  const { exp } = decoded

  const expired = Date.now() / 1000 > exp

  if (!expired) {
    console.debug('Auth token expiration:', moment(exp * 1000).fromNow())
    store.dispatch(loginSuccess(decoded))
  } else {
    console.debug('Auth token has expired!')
    store.dispatch(logoutUser())
  }
}

ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
