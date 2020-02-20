import { GENERATE_GAME, TURN_CLICK } from './gameTypes'

const initialState = {
  galaxy: [],
  gameYear: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GENERATE_GAME:
      return {
        ...state,
        galaxy: action.payload.galaxy,
        stardate: action.payload.stardate
      }
    case TURN_CLICK:
      return {
        ...state,
        stardate: state.stardate + 1
      }
    default:
      return state
  }
}
