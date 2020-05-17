import React, { useContext } from 'react'
import { store } from '../../store.js'
import { addSerie, removeSerie } from '../../services.js'

function SerieItem({ id, attributes }) {
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

  const addOrRemoveButton = series.find(serieId => serieId == id) ? (
    <button onClick={handleRemoveSerie}>REMOVE</button>
  ) : (
    <button onClick={handleAddSerie}>ADD</button>
  )

  return (
    <div className="manga">
      <p>{attributes.titles.en || attributes.titles.en_jp}</p>
      <img src={attributes.posterImage.small} />
      {attributes.synopsis && (
        <p>
          <small>{attributes.synopsis}</small>
        </p>
      )}
      {addOrRemoveButton}
    </div>
  )
}

export default SerieItem
