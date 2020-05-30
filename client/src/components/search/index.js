import React, { useState, useEffect } from 'react'
import SearchOption from './searchOption'
import { SearchDropList, SearchInput, SearchSectionHeader } from './styles'

function Search() {
  const [value, setValue] = useState('')
  const [animeResults, setAnimeResults] = useState({})
  const [mangaResults, setMangaResults] = useState({})

  useEffect(() => {
    async function searchAnimeSeries() {
      const res = await fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${value}&page[limit]=5`
      )
      res.json().then(response => setAnimeResults(response.data))
    }
    async function searchMangaSeries() {
      const res = await fetch(
        `https://kitsu.io/api/edge/manga?filter[text]=${value}&page[limit]=5`
      )
      res.json().then(response => setMangaResults(response.data))
    }
    if (value.length > 1) {
      searchAnimeSeries()
      searchMangaSeries()
    } else {
      setAnimeResults({})
      setMangaResults({})
    }
  }, [value])
  const handleChangeInput = e => {
    setValue(e.target.value)
  }

  const resetSearch = () => setValue('')
  return (
    <div>
      <SearchInput
        type="text"
        value={value}
        onChange={handleChangeInput}
        placeholder="Search title"
      />
      <SearchDropList>
        {animeResults.length > 0 && (
          <SearchSectionHeader>Anime</SearchSectionHeader>
        )}
        {animeResults.length > 0 &&
          animeResults.map(serie => (
            <SearchOption
              key={serie.id}
              serie={serie}
              resetSearch={resetSearch}
            />
          ))}
        {mangaResults.length > 0 && (
          <SearchSectionHeader>Manga</SearchSectionHeader>
        )}
        {mangaResults.length > 0 &&
          mangaResults.map(serie => (
            <SearchOption
              key={serie.id}
              serie={serie}
              resetSearch={resetSearch}
            />
          ))}
      </SearchDropList>
    </div>
  )
}

export default Search
