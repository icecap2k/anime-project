import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import Home from './components/Home'
import Page from './components/Page'
import Landing from './components/landing/index'
import Header from './components/header/header'

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Landing path="/" />
        <Page path="page/:name" />
        <Home path="home" />
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
