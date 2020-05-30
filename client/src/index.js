import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Router, Redirect } from '@reach/router'
import Home from './components/Home'
import Page from './components/Page'
import Landing from './components/landing/index'
import Header from './components/header/header'
import SerieInfo from './components/serie/serieInfo'
import { StateProvider, store } from './store.js'

const PrivateRoute = props => {
  const globalState = useContext(store)
  const { component, path, location } = props
  if (globalState.state.login) {
    switch (component) {
      case 'home':
        return <Home path={path} />
      case 'serie':
        return <SerieInfo path={path} location={location} />
      default:
        return <Landing path={path} />
    }
  } else {
    return <Redirect from={path} to="/" noThrow />
  }
}

const App = () => {
  return (
    <StateProvider>
      <Header />
      <Router>
        <Landing path="/" />
        <Page path="page/:name" />
        <PrivateRoute path="home" component="home" />
        <PrivateRoute path="serie" component="serie" />
      </Router>
    </StateProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
