import Galaxy from '../../models/galaxy/Galaxy'

const starCount = 32

export default () => {
  const gameObject = {}
  gameObject.stardate = 2225
  gameObject.galaxy = new Galaxy(starCount)
  return gameObject
}
