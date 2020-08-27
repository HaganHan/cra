import React from 'react'

import Router from '~src/components/Router'
import Nav from '~src/components/Nav'
import Breadcrumb from '~src/components/Breadcrumb'
import '~src/public.scss'

const App = (): JSX.Element => {
  return (
    <article className="App">
      <Nav />
      <hr />
      <Breadcrumb />
      <Router />
    </article>
  )
}

export default App
