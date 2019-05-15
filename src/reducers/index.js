import { combineReducers } from 'redux'

import errorReducer from './errorReducer'
import setupReducer from './setupReducer'

export default combineReducers({
  errors: errorReducer,
  setup: setupReducer
})
