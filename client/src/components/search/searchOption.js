import React from 'react'
import { navigate } from '@reach/router'
import { SearchItem } from './styles'

function SearchOption({ serie, resetSearch }) {
  const handleViewSerie = () => {
    resetSearch()
    const { id, type } = serie
    navigate('/serie', { state: { id, type } })
  }
  return (
    <SearchItem onClick={handleViewSerie}>
      <div>
        {serie.attributes.posterImage?.tiny && (
          <img src={serie.attributes.posterImage.tiny} />
        )}
      </div>
      <span>{serie.attributes.titles.en || serie.attributes.titles.en_jp}</span>
    </SearchItem>
  )
}

export default SearchOption
