import React, { useState, useEffect } from 'react'
import SerieList from './serie/serieList'
import { getKitsuData } from '../services'

function Home() {
  const [hasError, setErrors] = useState(false)
  const [mangas, setMangas] = useState({})
  const [trendingAnime, setTrendingAnime] = useState({})
  const [anime, setAnime] = useState({})

  useEffect(() => {
    async function getTrendingAnime() {
      const res = await fetch(
        'https://kitsu.io/api/edge/trending/anime?limit=5'
      )
      res
        .json()
        .then(response => setTrendingAnime(response))
        .catch(err => setErrors(err))
    }
    getTrendingAnime()
    async function getAnime() {
      const res = await fetch('https://kitsu.io/api/edge/anime?limit=5')
      res
        .json()
        .then(response => setAnime(response))
        .catch(err => setErrors(err))
    }
    getAnime()
  }, [])
  return (
    <div>
      {trendingAnime.data && (
        <SerieList
          list={trendingAnime.data}
          title="Trending Anime Series"
          type="anime"
        />
      )}
      {anime.data && (
        <SerieList list={anime.data} title="Anime Series" type="anime" />
      )}
    </div>
  )
}

export default Home
