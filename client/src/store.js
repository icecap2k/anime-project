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
          ...initialState,
          login: true,
          userId: action.userId,
          name: action.name,
          series: action.series,
        }
      case 'register':
        return {
          ...initialState,
          login: true,
          userId: action.userId,
          name: action.name,
        }
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
