import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import colors from '../styles/colors'

import Footer from './layout/Footer'
import Header from './layout/Header'
import GalaxyView from './layout/GalaxyView'
import InfoButton from './simple/InfoButton'

const Ui = styled.div`
  button:focus {
    outline: 0;
  }
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header header header'
    'galaxy galaxy sidebar'
    'footer footer footer';
  grid-template-columns: 1.75fr 1.75fr 1fr;
  grid-template-rows: 1fr 6fr 1fr;
`

const SideBar = styled.div`
  // border: orange 3px solid;
  grid-area: sidebar;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  border-left: rgba(255, 255, 255, 0.2) 1px solid;
`

const SetupScreen = styled.div`
  padding: 100px;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
`
const Brand = styled.h1`
  text-align: center;
  color: ${colors.blue1};
  font-size: 5em;
  text-shadow: ${colors.blue1} 6px 6px 3px;
  box-shadow: ${colors.blue1} 10px 10px 10px;
`

const Submit = styled.div`
  text-align: center;
  height: 100px;
`
export default class GameView extends Component {
  state = {
    gameSetup: false
  }

  render() {
    const game = (
      <Ui>
        <Header />
        <GalaxyView />
        <SideBar />
        <Footer />
      </Ui>
    )

    const gameSetup = (
      <SetupScreen>
        <Brand>MooJS</Brand>
        <form>
          <label>Empire Name</label>
          <input type='text' />
        </form>
        <Submit>
          <InfoButton
            title='Create Game'
            onClick={() => {
              this.setState({
                gameSetup: true
              })
            }}
          />
        </Submit>
      </SetupScreen>
    )

    return this.state.gameSetup === true ? game : gameSetup
  }
}
