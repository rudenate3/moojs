import { GENERATE_GAME, TURN_CLICK } from './gameTypes'
import generateGameObject from '../../controllers/setup/generateGame'

export const generateGame = () => {
  return {
    type: GENERATE_GAME,
    payload: generateGameObject()
  }
}

export const turnClick = () => ({
  type: TURN_CLICK
})
