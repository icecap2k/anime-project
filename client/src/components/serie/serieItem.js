import React, { useContext } from 'react'
import { Link, navigate } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { store } from '../../store.js'
import { addSerie, removeSerie } from '../../services.js'
import { ItemCard, ButtonAdd, ButtonRemove, ButtonInfo } from './styles'
import { faTrashAlt, faPlus, faInfo } from '@fortawesome/free-solid-svg-icons'

function SerieItem({ id, attributes, type }) {
  const globalState = useContext(store)
  const { userId, series } = globalState.state

  const handleAddSerie = async () => {
    const response = await addSerie(userId, id)
    if (response.request) {
      globalState.dispatch({ type: 'add', id })
    }
  }
  const handleRemoveSerie = async () => {
    const response = await removeSerie(userId, id)
    if (response.request) {
      globalState.dispatch({ type: 'remove', id })
    }
  }

  const handleViewSerie = () => {
    navigate('/serie', { state: { id, type } })
  }

  const addOrRemoveButton = series.find(serieId => serieId == id) ? (
    <ButtonRemove onClick={handleRemoveSerie}>
      REMOVE
      <FontAwesomeIcon icon={faTrashAlt} />
    </ButtonRemove>
  ) : (
    <ButtonAdd onClick={handleAddSerie}>
      ADD
      <FontAwesomeIcon icon={faPlus} />
    </ButtonAdd>
  )

  return (
    <ItemCard>
      <img src={attributes.posterImage.small} onClick={handleViewSerie} />
      {addOrRemoveButton}
      <ButtonInfo onClick={handleViewSerie}>
        MORE INFO
        <FontAwesomeIcon icon={faInfo} />
      </ButtonInfo>
    </ItemCard>
  )
}

export default SerieItem
