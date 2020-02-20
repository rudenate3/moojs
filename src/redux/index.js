import { combineReducers } from 'redux'

import errorReducer from './error/errorReducer'
import gameReducer from './game/gameReducer'

export default combineReducers({
  errors: errorReducer,
  game: gameReducer
})
