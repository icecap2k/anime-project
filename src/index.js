import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import Home from './components/Home'
import Page from './components/Page'

const App = () => {
  return (
    <div>
      <header>Cabecera</header>
      <Router>
        <Home path="/" />
        <Page path="page/:name" />
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
