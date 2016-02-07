import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './counter'

export default combineReducers({
  counter,
  router,
})
