import Star from './Star'

export default class Galaxy {
  constructor(starCount) {
    this.stars = Array(starCount)
      .fill()
      .map((e, i) => {
        return new Star(i)
      })
  }
}
