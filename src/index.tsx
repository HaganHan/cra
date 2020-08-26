import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from '~src/App'
import Loading from '~src/components/Loading'
import store from '~src/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Loading />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
