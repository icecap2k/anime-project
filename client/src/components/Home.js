import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'

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

  const loggin = () => {
    fetch(
      'http://localhost:8000/user/login?email=xavi@email.com&password=12345678',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
    ).then(response => {
      if (response.ok) {
        console.log('DENTOR')
      }
    })
  }

  const register = () => {
    const data = {
      name: 'aaa',
      email: 'aaa@email.com',
      password: '12341234',
    }
    fetch('http://localhost:8000/user/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      console.log(response)
      if (response.ok) {
        console.log(response)
      }
    })
  }

  const addSerie = () => {
    const data = {
      user: 1,
      serie: 7,
    }
    fetch('http://localhost:8000/serie/add', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      console.log(response)
      if (response.ok) {
        console.log(response)
      }
    })
  }

  const removeSerie = () => {
    const data = {
      user: 1,
      serie: 7,
    }
    fetch('http://localhost:8000/serie/remove', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      console.log(response)
      if (response.ok) {
        console.log(response)
      }
    })
  }

  console.log(mangas)
  return (
    <div className="home">
      <input type="button" onClick={removeSerie} />
      {mangas.data &&
        mangas.data.map(manga => {
          return (
            <div key={manga.id} className="manga">
              <p>
                {manga.attributes.titles.en || manga.attributes.titles.en_jp}
              </p>
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
