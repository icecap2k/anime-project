import React, { useState, useEffect } from 'react'
import SerieItem from './serie/serieItem'

function Home() {
  const [hasError, setErrors] = useState(false)
  const [mangas, setMangas] = useState({})

  useEffect(() => {
    async function fetchData() {
      // const res = await fetch('https://kitsu.io/api/edge/manga?limit=20')
      const res = await fetch(
        'https://kitsu.io/api/edge/manga?page[limit]=15&page[offset]=0'
      )
      res
        .json()
        .then(data => setMangas(data))
        .catch(err => setErrors(err))
    }

    fetchData()
  }, [])

  console.log(mangas)
  return (
    <div className="home">
      {mangas.data &&
        mangas.data.map(manga => (
          <SerieItem
            key={manga.id}
            id={manga.id}
            attributes={manga.attributes}
          />
        ))}
    </div>
  )
}

export default Home
