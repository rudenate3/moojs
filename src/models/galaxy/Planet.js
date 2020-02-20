const randomSize = () => ['small', 'medium', 'large', 'huge']

export default class Planet {
  constructor() {
    this.size = randomSize()
  }
}
