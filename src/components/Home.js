import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'

function Home() {
  const [hasError, setErrors] = useState(false)
  const [mangas, setMangas] = useState({})

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://kitsu.io/api/edge/manga?limit=20')
      // const res = await fetch('https://kitsu.io/api/edge/trending/manga?limit=20')
      res
        .json()
        .then(data => setMangas(data))
        .catch(err => setErrors(err))
    }

    fetchData()
  }, [])

  return (
    <div className="home">
      {mangas.data &&
        mangas.data.map(manga => {
          return (
            <div key={manga.id} className="manga">
              <p>{manga.attributes.titles.en || manga.attributes.titles.en_jp}</p>
              <img src={manga.attributes.posterImage.small} />
              {manga.attributes.synopsis && (
                <p>
                  <small>{manga.attributes.synopsis}</small>
                </p>
              )}
            </div>
          )
        })}
    </div>
  )
}

export default Home
