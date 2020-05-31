import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Router, Redirect } from '@reach/router'
import Home from './components/home'
import Category from './components/category'
import Landing from './components/landing'
import Library from './components/library'
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
      case 'library':
        return <Library path={path} />
      case 'category':
        return <Category path={path} location={location} />
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
        <PrivateRoute path="home" component="home" />
        <PrivateRoute path="serie" component="serie" />
        <PrivateRoute path="library" component="library" />
        <PrivateRoute path="category" component="category" />
      </Router>
    </StateProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
