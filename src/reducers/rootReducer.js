import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import screenSize from './screen-size'
import counter from './counter'
import auth from './auth'
import user from './user'

export default combineReducers({
  auth,
  user,
  counter,
  screenSize,
  router,
})
