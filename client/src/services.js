/**
 * Call api to login user
 * @param {String} email User email
 * @param {String} password User password
 */
export const login = async (email, password) => {
  return await fetch('http://localhost:8000/user/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
}

/**
 * Call api to register user
 * @param {String} name User name
 * @param {String} email User email
 * @param {String} password User password
 */
export const register = async (name, email, password) => {
  return await fetch('http://localhost:8000/user/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
}

/**
 * Call api to add serie to specific user
 * @param {Number} userId User database ID
 * @param {Number} serieId Serie api ID
 */
export const addSerie = async (userId, serieId) => {
  return await fetch('http://localhost:8000/serie/add', {
    method: 'POST',
    body: JSON.stringify({ userId, serieId }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
}

/**
 * Call api to remove serie to specific user
 * @param {Number} userId User database ID
 * @param {Number} serieId Serie api ID
 */
export const removeSerie = async (userId, serieId) => {
  return await fetch('http://localhost:8000/serie/remove', {
    method: 'POST',
    body: JSON.stringify({ userId, serieId }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
}

/**
 * Kitsu api services
 */
export const getKitsuData = async url => {
  return await fetch(url).then(response => response.json())
}
