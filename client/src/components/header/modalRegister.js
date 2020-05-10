import React, { useState } from 'react'
import { ModalContainer, LayerOpacity } from './styles'

function ModalRegister({ registerUser, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)

  const handleOnRegister = () => {
    if (!validateEmail(email)) {
      setErrorEmail(true)
    } else if (name.length > 0 && email.length > 0 && password.length > 0) {
      registerUser(name, email, password)
    } else {
      setError(true)
    }
  }
  const validateEmail = email => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
  }
  const onChangeName = e => {
    setError(false)
    setName(e.target.value)
  }
  const onChangeEmail = e => {
    setErrorEmail(false)
    setError(false)
    setEmail(e.target.value)
  }
  const onChangePassword = e => {
    setError(false)
    setPassword(e.target.value)
  }
  return (
    <>
      <ModalContainer>
        <h2>WELLCOME</h2>
        <input
          placeholder="Name"
          type="name"
          id="name"
          value={name}
          onChange={onChangeName}
          required
        />
        <input
          placeholder="Email"
          type="email"
          id="email"
          value={email}
          onChange={onChangeEmail}
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
        {error && <p>All fields are required</p>}
        {errorEmail && <p>Please insert a correct email address</p>}
        <button onClick={handleOnRegister}>SIGN IN</button>
      </ModalContainer>
      <LayerOpacity onClick={onClose} />
    </>
  )
}

export default ModalRegister
