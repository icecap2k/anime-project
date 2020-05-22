import React from 'react'
import { Link } from '@reach/router'
import SerieItem from './serieItem'
import { SerieListContainer, SerieRow } from './styles'

function SerieList({ list, title, type }) {
  return (
    <SerieListContainer>
      <h3>{title}</h3>
      <SerieRow>
        {list.map(serie => (
          <SerieItem
            key={serie.id}
            id={serie.id}
            attributes={serie.attributes}
            type={type}
          />
        ))}
      </SerieRow>
      <Link to="/">View more</Link>
    </SerieListContainer>
  )
}

export default SerieList
