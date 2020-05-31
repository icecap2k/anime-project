import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import SerieList from '../serie/serieList'
import { getKitsuData } from '../../services'
import { trending, generic, listOfCategories } from '../commons/settings'
import { CategoryContainer, HomeContainer } from './styles'

function CategoryItem({ category }) {
  const handleSelectCategory = () => {
    navigate('/category', { state: { category } })
  }
  return <li onClick={handleSelectCategory}>{category.attributes.title}</li>
}

function Home() {
  const [mangas, setMangas] = useState({})
  const [trendingAnime, setTrendingAnime] = useState({})
  const [trendingManga, setTrendingManga] = useState({})
  const [anime, setAnime] = useState({})
  const [categories, setCategories] = useState({})

  useEffect(() => {
    getKitsuData(trending, { type: 'anime', limit: 5 }).then(response =>
      setTrendingAnime(response)
    )
    getKitsuData(trending, { type: 'manga', limit: 5 }).then(response =>
      setTrendingManga(response)
    )
    getKitsuData(generic, { type: 'anime', limit: 5 }).then(response =>
      setAnime(response)
    )
    getKitsuData(generic, { type: 'manga', limit: 5 }).then(response =>
      setMangas(response)
    )
    getKitsuData(listOfCategories, { limit: 30 }).then(response =>
      setCategories(response)
    )
  }, [])

  return (
    <HomeContainer>
      <CategoryContainer>
        <h3>Category list</h3>
        <ul>
          {categories.data &&
            categories.data.map(category => (
              <CategoryItem key={category.id} category={category} />
            ))}
        </ul>
      </CategoryContainer>
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
    </HomeContainer>
  )
}

export default Home
