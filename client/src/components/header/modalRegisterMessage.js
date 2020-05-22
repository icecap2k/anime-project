import React from 'react'
import { ModalContainer, LayerOpacity } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExclamationTriangle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'

function ModalRegisterMessage({ message, onClose, error }) {
  const icon = error ? (
    <FontAwesomeIcon icon={faExclamationTriangle} />
  ) : (
    <FontAwesomeIcon icon={faCheckCircle} />
  )
  return (
    <>
      <ModalContainer>
        <p></p>
        {icon}
        <p>{message}</p>
        <button onClick={onClose}>CLOSE</button>
      </ModalContainer>
      <LayerOpacity onClick={onClose} />
    </>
  )
}

export default ModalRegisterMessage
