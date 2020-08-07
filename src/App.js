import React from 'react'
import '@src/public.scss'
import Router from '@src/components/Router'
import Nav from '@src/components/Nav'

const App = props => {
  return (
    <article className="App">
      <Nav />
      <Router />
    </article>
  )
}

export default App
