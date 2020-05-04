import React from 'react'
import { Link } from '@reach/router'
import { HeaderContainer } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <nav>
        <h1>Toshokan</h1>
        <Link to="/news">NEWS</Link>
        <Link to="/register">REGISTER</Link>
        <div>
          <Link to="/login">LOG IN</Link>
        </div>
      </nav>
    </HeaderContainer>
  )
}

export default Header
