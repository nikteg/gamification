import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './counter'
import auth from './auth'
import user from './user'

export default combineReducers({
  auth,
  user,
  counter,
  router,
})
