import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import { reducer } from 'store'
// import App from './App'
import { TodoPage } from 'pages/todo'
import reportWebVitals from 'reportWebVitals'

// storeの生成
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <TodoPage />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
