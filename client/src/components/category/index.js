import React, { useState, useEffect } from 'react'
import SerieList from '../serie/serieList'
import { getKitsuData } from '../../services'
import { trendingCategory, categoryFilter } from '../commons/settings'
import { CategoryInfo, CategoryTotalSeries } from './styles'

function Category({ location }) {
  const { category } = location.state
  console.log(category)
  const [trendingAnime, setTrendingAnime] = useState({})
  const [anime, setAnime] = useState({})

  useEffect(() => {
    getKitsuData(trendingCategory, {
      type: 'anime',
      limit: 15,
      categoryId: category.id,
    }).then(response => setTrendingAnime(response))

    getKitsuData(categoryFilter, {
      type: 'anime',
      limit: 15,
      categoryName: category.attributes.title,
    }).then(response => setAnime(response))
  }, [])

  return (
    <CategoryInfo>
      <h2>Category: {category.attributes.title}</h2>
      <p>{category.attributes.description}</p>
      <CategoryTotalSeries>
        Total series in this category:{' '}
        <span>
          {new Intl.NumberFormat('de-DE').format(
            category.attributes.totalMediaCount
          )}
        </span>
      </CategoryTotalSeries>
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
    </CategoryInfo>
  )
}

export default Category
