import React, { useState } from 'react'
import { Link } from '@reach/router'

function Home() {
  // const [count, setCount] = useState(0)

  return (
    <div className="home">
      <div>Probando reach router.</div>
      <Link to="page/javi">Vamos ana pagina con una prop</Link>
    </div>
  )
}

export default Home
