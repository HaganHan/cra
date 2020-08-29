import React, { FunctionComponent } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { pageInfoList } from '~src/common/tools'
import NotFound from '~src/pages/notFound'
import { State } from '~src/interface/store'

const Router: FunctionComponent = () => {
  const userInfo = useSelector((state: State) => state.userInfo)

  return (
    <Switch>
      <Redirect from="/" to="/home" exact />
      {
        pageInfoList.length && pageInfoList.map(page => {
          const { mustLogin, mustLogout } = page.Component
          const { path, Component } = page
          if (mustLogin) {
            if (userInfo.userName) {
              return (
                <Route
                  key={path}
                  path={path}
                  component={Component}
                  exact
                />
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
                component={Component}
                exact
              />
            )
          }
          return (
            <Route
              key={path}
              path={path}
              component={Component}
              exact
            />
          )
        })
      }
      <Route path="*" component={NotFound} exact />
    </Switch>
  )
}

export default Router
