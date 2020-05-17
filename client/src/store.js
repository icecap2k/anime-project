import React, { createContext, useReducer } from 'react'

const initialState = {
  login: false,
  userId: -1,
  name: '',
  series: [],
}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'login':
        return {
          ...state,
          login: true,
          userId: action.id,
          name: action.name,
          series: action.series,
        }
      case 'register':
        return {
          ...state,
          login: true,
          userId: action.id,
          name: action.name,
        }
      case 'add':
        return {
          ...state,
          series: [...state.series, action.id],
        }
      case 'remove':
        return {
          ...state,
          series: state.series.filter(serie => serie != action.id),
        }
      default:
        throw new Error()
    }
  }, initialState)
  console.log('STORE', state)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
