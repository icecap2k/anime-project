import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'
import Home from './components/Home'
import Page from './components/Page'

const Loader = () => <div className="c-loader-wrapper">{/* <Spinner>
      loading
    </Spinner> */}</div>

const App = () => {
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <header>Cabecera</header>
      <Router>
        <Home path="/" />
        <Page path="page/:name" />
      </Router>
      {/* </Suspense> */}
    </>
  )
}

render(<App />, document.getElementById('app'))
