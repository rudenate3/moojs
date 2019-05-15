import React, { Component, Fragment } from 'react'
import GameView from './components/GameView'

import generateGame from './controllers/setup/generateGame'

class App extends Component {
  componentDidMount() {
    generateGame('test')
  }

  render() {
    return (
      <Fragment>
        <GameView />
      </Fragment>
    )
  }
}

export default App
