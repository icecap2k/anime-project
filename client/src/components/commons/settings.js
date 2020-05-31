const apiRoot = 'https://kitsu.io/api/edge/'

export const apiUrls = {
  trendingAnime: `${apiRoot}trending/anime?limit=`,
  trendingManga: `${apiRoot}trending/manga?limit=`,
  globalAnime: `${apiRoot}anime?page[limit]=`,
  globalManga: `${apiRoot}anime?page[limit]=`,
}
