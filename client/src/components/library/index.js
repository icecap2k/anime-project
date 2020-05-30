import React, { useState, useEffect, useContext } from 'react'
import { store } from '../../store.js'
import SerieList from '../serie/serieList'

function Library() {
  const [animeList, setAnimelist] = useState({})
  const globalState = useContext(store)
  useEffect(() => {
    console.log(globalState.state.series)
    async function getSeriesInfo() {
      const userSeries = Promise.all(
        globalState.state.series.map(
          async serie =>
            await (await fetch(`https://kitsu.io/api/edge/anime/${serie}`))
              .json()
              .then(response => response.data)
        )
      )
      return userSeries
    }
    getSeriesInfo().then(data => {
      setAnimelist(data)
    })
  }, [])
  return (
    <div>
      {animeList && animeList.length > 0 && (
        <SerieList list={animeList} title="My library" type="anime" />
      )}
    </div>
  )
}

export default Library
