import React from 'react'

import Router from '~src/components/Router'
import Nav from '~src/components/Nav'
import Breadcrumb from '~src/components/Breadcrumb'
import '~src/public.scss'
import { Component } from '~src/interface/common'

const App: Component = () => {
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
