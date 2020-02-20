import starnames from '../../data/starNames'

export default class Star {
  colors = ['yellow', 'red', 'green', 'brown', 'blue']

  constructor(id) {
    this.id = id
    this.color = this.colors[Math.randomRange(0, this.colors.length)]
    this.name = starnames[Math.randomRange(0, starnames.length)]
    this.planets = Math.randomRange(0, 3)
    this.x = Math.randomRange(3, 90)
    this.y = Math.randomRange(3, 90)
  }
}
