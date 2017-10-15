import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createCustomHistory } from 'utils/router'

import AppRoute from './routes'
import configureStore from './redux/createStore'

var browserHistory = createCustomHistory()

const getStoreDefault = () => {
  if (typeof window !== 'undefined') { return window.__REDUX_STORE__ ? window.__REDUX_STORE__ : {} }
  return {}
}

const store = configureStore(getStoreDefault(), {
  routerHistory: browserHistory
})

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {AppRoute()}
        </Router>
      </Provider>
    )
  }
}
