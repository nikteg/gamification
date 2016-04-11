import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import screenSize from './screen-size'
import counter from './counter'

export default combineReducers({
  counter,
  screenSize,
  router,
})
