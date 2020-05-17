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
