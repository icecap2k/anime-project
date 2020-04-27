import React, { useState } from 'react'
import { Link } from '@reach/router'

function Page({ name }) {
  // const [count, setCount] = useState(0)

  return (
    <div className="page">
      <div>{name}. Hemos ido a otra pagina.</div>
      <Link to="/">Volvamos a casa</Link>
    </div>
  )
}

export default Page
