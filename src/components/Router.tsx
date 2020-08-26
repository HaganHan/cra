import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { pages } from '~src/common/tools.ts'
import NotFound from '~src/pages/notFound.jsx'

interface State {
  userInfo: { userName: string };
}

const Router = () => {
  const userInfo = useSelector((state: State) => state.userInfo)
  const location = useLocation()

  return (
    <Switch>
      <Redirect from="/" to="/home" exact />
      {
        pages.length && pages.map(page => {
          const { mustLogin, mustLogout } = page.Component
          const { path, Component } = page
          if (mustLogin) {
            if (userInfo.userName) {
              return (
                <Route
                  key={path}
                  path={path}
                  exact>
                  <Component />
                </Route>
              )
            }
            return (
              <Redirect
                from={path}
                key={path}
                to={{ pathname: '/login' }}
              />
            )
          }

          if (mustLogout) {
            if (userInfo.userName) {
              return (
                <Redirect
                  from={path}
                  key={path}
                  to={{ pathname: '/home' }}
                />
              )
            }
            return (
              <Route
                key={path}
                path={path}
                exact>
                <Component />
              </Route>
            )
          }
          return (
            <Route
              key={path}
              path={path}
              exact>
              <Component />
            </Route>
          )
        })
      }
      <Route path="*" component={NotFound} exact />
    </Switch>
  )
}

export default Router
