import React, { useState, useEffect } from 'react'
import SearchSection from './searchSection'
import { getKitsuData } from '../../services'
import { SearchDropList, SearchInput } from './styles'

function Search() {
  const [value, setValue] = useState('')
  const [animeResults, setAnimeResults] = useState({})
  const [mangaResults, setMangaResults] = useState({})

  useEffect(() => {
    async function searchSeries(type) {
      return getKitsuData(
        `https://kitsu.io/api/edge/${type}?filter[text]=${value}&page[limit]=5`,
        {}
      )
    }
    if (value.length > 1) {
      searchSeries('anime').then(response => setAnimeResults(response.data))
      searchSeries('manga').then(response => setMangaResults(response.data))
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
      {animeResults.length > 0 && mangaResults.length > 0 && (
        <SearchDropList>
          <SearchSection
            list={animeResults}
            title="Anime"
            resetSearch={resetSearch}
          />

          <SearchSection
            list={mangaResults}
            title="Manga"
            resetSearch={resetSearch}
          />
        </SearchDropList>
      )}
    </div>
  )
}

export default Search
