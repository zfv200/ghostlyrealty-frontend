import React from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import userReducer from './Reducers/users'
import houseReducer from './Reducers/houses'
import agentReducer from './Reducers/agents'
import searchReducer from './Reducers/searches'

export const rootReducer = combineReducers({userReducer, houseReducer, agentReducer, searchReducer})

//now I can pass any initialState I want inside of any test suites
export default ({children, initialState = {}}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
