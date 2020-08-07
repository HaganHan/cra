import React from 'react'
import ReactDOM from 'react-dom'
import App from '@src/App'
import { Provider } from 'react-redux'
import Loading from '@src/components/Loading'
import store from '@src/store'
import { BrowserRouter } from 'react-router-dom'

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
