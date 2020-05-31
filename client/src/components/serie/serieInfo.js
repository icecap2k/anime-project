import React, { useState, useEffect, useContext } from 'react'
import { store } from '../../store.js'
import { addSerie, removeSerie } from '../../services.js'
import {
  SerieInfoContainer,
  SerieBanner,
  ButtonAdd,
  ButtonRemove,
  SerieLateralInfo,
  SerieVideo,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPlayer from 'react-player'
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'

function SerieInfo({ location }) {
  const globalState = useContext(store)
  const [anime, setAnime] = useState({})
  const { type, id } = location.state
  useEffect(() => {
    async function getTrendingAnime() {
      const res = await fetch(`https://kitsu.io/api/edge/${type}/${id}`)
      res
        .json()
        .then(response => setAnime(response))
        .catch(err => setErrors(err))
    }
    getTrendingAnime()
  }, [location.state])
  console.log(anime.data)

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
    <SerieInfoContainer>
      {anime.data && (
        <>
          {anime.data.attributes.coverImage ? (
            <SerieBanner image={anime.data.attributes.coverImage.original} />
          ) : (
            anime.data.attributes.posterImage && (
              <SerieBanner image={anime.data.attributes.posterImage.large} />
            )
          )}
          <section>
            <SerieLateralInfo>
              <img src={anime.data.attributes.posterImage.small} />
              {addOrRemoveButton}
            </SerieLateralInfo>
            <div>
              <h2>
                {anime.data.attributes.titles.en ||
                  anime.data.attributes.titles.en_jp}
              </h2>
              {anime.data.attributes.synopsis && (
                <p>{anime.data.attributes.synopsis}</p>
              )}
              {anime.data.attributes.youtubeVideoId && (
                <SerieVideo>
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${anime.data.attributes.youtubeVideoId}`}
                  />
                </SerieVideo>
              )}
            </div>
          </section>
        </>
      )}
    </SerieInfoContainer>
  )
}

export default SerieInfo
