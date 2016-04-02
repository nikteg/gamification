import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './counter'
import auth from './auth'

export default combineReducers({
  auth,
  counter,
  router,
})
