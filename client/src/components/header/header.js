import React, { useState, useContext, useEffect } from 'react'
import { Link, navigate } from '@reach/router'
import { HeaderContainer } from './styles'
import { store } from '../../store.js'
import ModalSignIn from './modalSignIn'
import ModalRegister from './modalRegister'
import ModalRegisterMessage from './modalRegisterMessage'

function Header() {
  const globalState = useContext(store)
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showRegisterModalMessage, setShowRegisterModalMessage] = useState(
    false
  )
  const [username, setUsername] = useState(false)
  const [error, setError] = useState(false)
  const [registerError, setRegisterError] = useState(false)
  const [registerMessage, setRegisterMessage] = useState('')
  useEffect(() => {
    setUsername(globalState.state.name)
  }, [globalState.state.name])

  const signIn = (email, password) => {
    fetch('http://localhost:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(responseData => {
        if (responseData) {
          const { userId, name, series } = responseData
          globalState.dispatch(
            { type: 'login', userId, name, series },
            handleShowSignInModal(),
            navigate('/home')
          )
        } else {
          setError(true)
        }
      })
  }

  const registerUser = (name, email, password) => {
    fetch('http://localhost:8000/user/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(responseData => {
        if (responseData.request) {
          const { userId, name } = responseData
          globalState.dispatch(
            { type: 'register', userId, name },
            navigate('/home')
          )
        }
        setRegisterError(!responseData.request)
        setRegisterMessage(responseData.message)
        handleShowRegisterModal()
        handleShowRegisterModalMessage()
      })
  }

  const handleShowSignInModal = () => {
    setShowSignInModal(!showSignInModal)
  }

  const handleShowRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal)
  }

  const handleShowRegisterModalMessage = () => {
    setShowRegisterModalMessage(!showRegisterModalMessage)
  }

  return (
    <>
      <HeaderContainer>
        {username && (
          <nav>
            <h1>Toshokan</h1>
            <Link to="/news">NEWS</Link>
            <Link to="/library">LIBRARY</Link>
            <Link to="/profile">WELLCOME {username}</Link>
          </nav>
        )}
        {!username && (
          <nav>
            <h1>Toshokan</h1>
            <Link to="/news">NEWS</Link>
            <div>
              <button onClick={handleShowRegisterModal}>REGISTER</button>
              <button onClick={handleShowSignInModal}>SIGN IN</button>
            </div>
          </nav>
        )}
      </HeaderContainer>
      {showSignInModal && (
        <ModalSignIn
          signIn={signIn}
          onClose={handleShowSignInModal}
          errorLogin={error}
        />
      )}
      {showRegisterModal && (
        <ModalRegister
          registerUser={registerUser}
          onClose={handleShowRegisterModal}
          registerError={registerError}
        />
      )}
      {showRegisterModalMessage && (
        <ModalRegisterMessage
          message={registerMessage}
          onClose={handleShowRegisterModalMessage}
          error={registerError}
        />
      )}
    </>
  )
}

export default Header
