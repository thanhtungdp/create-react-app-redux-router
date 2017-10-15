/* eslint-disable */
import { useRouterHistory, browserHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import $ from 'jquery'

const REDIRECT_LOCATION = 'redirectLocation'

export function createCustomHistory() {
  let customHistory = browserHistory
  if (typeof window !== 'undefined') {
    customHistory = useRouterHistory(createBrowserHistory)()
    customHistory.listen(location => {
      setTimeout(() => {
        if (typeof ga !== 'undefined') {
          if (location.pathname !== '/') {
            ga('send', 'pageview', `${location.pathname}`)
          }
        }
        if (location.action === 'POP') {
          return
        }
        $('body').animate({ scrollTop: 0 }, 500)
      }, 10)
    })
  }
  return customHistory
}

export function setRedirect(location) {
  localStorage.setItem(REDIRECT_LOCATION, location)
}

export function resetRedirect() {
  setRedirect('')
}

export function getRedirect() {
  return localStorage.getItem(REDIRECT_LOCATION)
}
