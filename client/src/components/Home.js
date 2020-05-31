import React, { useState, useEffect } from 'react'
import SerieList from './serie/serieList'
import { getKitsuData } from '../services'
import { apiUrls } from './commons/settings'

function Home() {
  const [hasError, setErrors] = useState(false)
  const [mangas, setMangas] = useState({})
  const [trendingAnime, setTrendingAnime] = useState({})
  const [trendingManga, setTrendingManga] = useState({})
  const [anime, setAnime] = useState({})

  useEffect(() => {
    getKitsuData(apiUrls.trendingAnime, 5).then(response =>
      setTrendingAnime(response)
    )
    getKitsuData(apiUrls.trendingManga, 5).then(response =>
      setTrendingManga(response)
    )
    getKitsuData(apiUrls.globalAnime, 5).then(response => setAnime(response))
    getKitsuData(apiUrls.globalManga, 5).then(response => setMangas(response))
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
      {trendingManga.data && (
        <SerieList
          list={trendingManga.data}
          title="Trending Manga Series"
          type="manga"
        />
      )}
      {mangas.data && (
        <SerieList list={mangas.data} title="Manga Series" type="manga" />
      )}
    </div>
  )
}

export default Home
