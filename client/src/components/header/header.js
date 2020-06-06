import React, { useState, useContext, useEffect } from 'react'
import { Link, navigate } from '@reach/router'
import { HeaderContainer, HeaderGoBack } from './styles'
import { store } from '../../store.js'
import { login, register } from '../../services.js'
import ModalSignIn from './modalSignIn'
import ModalRegister from './modalRegister'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import ModalRegisterMessage from './modalRegisterMessage'
import Search from '../search'

function Header() {
  const globalState = useContext(store)
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showRegisterMessage, setShowRegisterMessage] = useState(false)
  const [username, setUsername] = useState(false)
  const [error, setError] = useState(false)
  const [registerError, setRegisterError] = useState(false)
  const [registerMessage, setRegisterMessage] = useState('')
  useEffect(() => {
    setUsername(globalState.state.name)
  }, [globalState.state.name])

  const signIn = async (email, password) => {
    const response = await login(email, password)
    if (response) {
      const { id, name, series } = response
      globalState.dispatch(
        { type: 'login', id, name, series },
        ToggleSignInModal(),
        navigate('/home')
      )
    } else {
      setError(true)
    }
  }

  const registerUser = async (name, email, password) => {
    const response = await register(name, email, password)
    if (response.request) {
      const { id, name } = response
      globalState.dispatch({ type: 'register', id, name }, navigate('/home'))
    }
    setRegisterError(!response.request)
    setRegisterMessage(response.message)
    ToggleRegisterModal()
    ToggleRegisterMessage()
  }

  const ToggleSignInModal = () => setShowSignInModal(!showSignInModal)
  const ToggleRegisterModal = () => setShowRegisterModal(!showRegisterModal)
  const ToggleRegisterMessage = () =>
    setShowRegisterMessage(!showRegisterMessage)

  const handleGoBack = () => navigate(-1)
  return (
    <>
      <HeaderContainer>
        {username && (
          <nav>
            <h1>Toshokan</h1>
            <Link to="/home">HOME</Link>
            <Link to="/library">LIBRARY</Link>
            <Link to="/profile">WELLCOME {username}</Link>
            <Search />
          </nav>
        )}
        {!username && (
          <nav>
            <h1>Toshokan</h1>
            <div>
              <button onClick={ToggleRegisterModal}>REGISTER</button>
              <button onClick={ToggleSignInModal}>SIGN IN</button>
            </div>
          </nav>
        )}
      </HeaderContainer>
      {username && (
        <HeaderGoBack>
          <button onClick={handleGoBack}>
            <FontAwesomeIcon icon={faArrowLeft} /> Go back
          </button>
        </HeaderGoBack>
      )}
      {showSignInModal && (
        <ModalSignIn
          signIn={signIn}
          onClose={ToggleSignInModal}
          errorLogin={error}
        />
      )}
      {showRegisterModal && (
        <ModalRegister
          registerUser={registerUser}
          onClose={ToggleRegisterModal}
          registerError={registerError}
        />
      )}
      {showRegisterMessage && (
        <ModalRegisterMessage
          message={registerMessage}
          onClose={ToggleRegisterMessage}
          error={registerError}
        />
      )}
    </>
  )
}

export default Header
