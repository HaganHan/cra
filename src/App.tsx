import React from 'react'

import Router from '~src/components/Router.tsx'
import Nav from '~src/components/Nav.tsx'
import Breadcrumb from '~src/components/Breadcrumb.tsx'
import '~src/public.scss'

const App = () => {
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
