import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import Home from './components/Home'
import Page from './components/Page'
import Landing from './components/landing/index'
import Header from './components/header/header'
import SerieInfo from './components/serie/serieInfo'
import { StateProvider } from './store.js'

const App = () => {
  return (
    <StateProvider>
      <Header />
      <Router>
        <Landing path="/" />
        <Page path="page/:name" />
        <Home path="home" />
        <SerieInfo path="serie" />
      </Router>
    </StateProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
