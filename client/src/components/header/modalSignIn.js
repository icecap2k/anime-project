import React, { useState, useContext } from 'react'
import { ModalContainer, LayerOpacity } from './styles'

function ModalSignIn({ signIn, onClose, errorLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnSignIn = () => {
    signIn(email, password)
  }
  const onChangeText = e => setEmail(e.target.value)
  const onChangePassword = e => setPassword(e.target.value)
  return (
    <>
      <ModalContainer>
        <h2>WELLCOME BACK!</h2>
        <input
          placeholder="Email"
          type="email"
          id="email"
          value={email}
          onChange={onChangeText}
          required
        />
        <input
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={onChangePassword}
          required
        />
        {errorLogin && <p>Wrong email or password</p>}
        <button onClick={handleOnSignIn}>SIGN IN</button>
      </ModalContainer>
      <LayerOpacity onClick={onClose} />
    </>
  )
}

export default ModalSignIn
