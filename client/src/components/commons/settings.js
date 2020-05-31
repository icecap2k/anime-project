export const apiRoot = 'https://kitsu.io/api/edge/'
export const trending = `${apiRoot}trending/:type?limit=:limit`
export const trendingCategory = `${trending}&in_category=true&category=:categoryId`
export const generic = `${apiRoot}:type?page[limit]=:limit`
export const listOfCategories = `${apiRoot}categories?page[limit]=:limit&sort=-total_media_count`
export const categoryFilter = `${generic}&filter[categories]=:categoryName&sort=-start_date`
export const category = `${generic}categories/:categoryId`
