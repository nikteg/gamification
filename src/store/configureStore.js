import { applyMiddleware, createStore } from 'redux'
import { syncHistory } from 'redux-simple-router'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

export default function configureStore({ initialState = {}, history }) {
  // Sync with router via history instance (main.js)
  const routerMiddleware = syncHistory(history)

  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(thunk, routerMiddleware)
  // if (__DEBUG__) middleware = withDevTools(middleware)

  // Create final store and subscribe router in debug env ie. for devtools
  const store = middleware(createStore)(rootReducer, initialState)
  if (__DEBUG__) routerMiddleware.listenForReplays(store, ({ router }) => router)

  if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer')

      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
