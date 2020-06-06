import React, { useState, useEffect } from 'react'
import { getKitsuData } from '../../services'
import { trending } from '../commons/settings'
import { SerieBanner } from '../serie/styles'
import { LandingHeader, LandingMain } from './styles'
function Landing() {
  const [headerImage, setHeaderImage] = useState({})

  const randomImage = manga => {
    const image =
      manga[Math.floor(Math.random() * manga.length)].attributes.coverImage

    return image && image.original ? image.original : randomImage(manga)
  }

  useEffect(() => {
    getKitsuData(trending, { type: 'manga', limit: 20 }).then(response => {
      const randomManga = randomImage(response.data)
      setHeaderImage(randomManga)
    })
  }, [])
  return (
    <div className="landing">
      <SerieBanner image={headerImage}>
        <LandingHeader>
          <h1>Toshokan</h1>
          <h2>your anime and manga library</h2>
        </LandingHeader>
      </SerieBanner>
      <LandingMain>
        <h2>Create your own manga/anime library</h2>
        <p>
          Do you want to keep your series organized? Sign up for Toshokan to get
          started right now.
        </p>

        <article>
          <section>
            <h3>Select your series</h3>
            <p>
              You can create your space with your series collections, so you can
              finally have control of each and every one of your series.
            </p>
          </section>
          <section>
            <h3>Follow the news</h3>
            <p>
              and do not miss any premiere or continuation of your favorite
              series
            </p>
          </section>
          <section>
            <h3>Bookmark pages</h3>
            <p>
              You can control and track your readings. Have you finished a
              series and don't know what to wear? You can control your readings
              and easily see what series you have to read and thus choose which
              world to dive into next.
            </p>
          </section>
        </article>
      </LandingMain>
    </div>
  )
}

export default Landing
