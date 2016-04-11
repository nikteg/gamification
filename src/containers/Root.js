import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import DevTools from '../components/DevTools'

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired,
  };

  render() {
    const { history, routes, store } = this.props

    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
          {!window.devToolsExtension && <DevTools />}
        </div>
      </Provider>
    )
  }
}

