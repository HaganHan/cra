import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { getPages } from '@src/common/tools'
import NotFound from '@src/pages/notFound'

const pages = getPages()

const Router = props => {
  return (
    <Switch>
      <Redirect from="/" to="/home" exact />
      {
        pages.length && pages.map(page => (
          <Route
            key={page.path}
            path={page.path}
            exact>
            <page.Component />
          </Route>
        ))
      }
      <Route path="*" component={NotFound} exact />
    </Switch>
  )
}

export default Router
