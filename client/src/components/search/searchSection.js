import React from 'react'
import SearchOption from './searchOption'
import { SearchSectionHeader } from './styles'

function SearchSection({ list, title, resetSearch }) {
  return (
    <>
      <SearchSectionHeader>{title}</SearchSectionHeader>
      {list.map(serie => (
        <SearchOption key={serie.id} serie={serie} resetSearch={resetSearch} />
      ))}
    </>
  )
}

export default SearchSection
