import React from 'react'
import '~src/public.scss'
import Router from '~src/components/Router'
import Nav from '~src/components/Nav'
import Breadcrumb from '~src/components/Breadcrumb'

const App = props => {
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
