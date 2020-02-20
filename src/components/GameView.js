import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styled from 'styled-components'

import colors from '../styles/colors'

import { generateGame, turnClick } from '../redux/game/gameActions'

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
  align-items: center;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const SideBarItem = styled.div`
  color: white;
  font-size: 1.7rem;
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

class GameView extends Component {
  state = {
    gameInitialized: false
  }

  componentDidMount() {
    this.props.generateGame()
    this.setState({ gameInitialized: true }) // TODO auto starts game
  }

  render() {
    const { galaxy, stardate } = this.props.game
    const game = (
      <Ui>
        <Header stardate={stardate} />
        <GalaxyView galaxy={galaxy} />
        <SideBar>
          <SideBarItem>Credits: 1000</SideBarItem>
          <SideBarItem>Freighters: 100</SideBarItem>
          <SideBarItem>Food: +5</SideBarItem>
          <SideBarItem>Fleet: 87/100</SideBarItem>
          <SideBarItem>Research: 100RP</SideBarItem>
        </SideBar>
        <Footer {...this.props} />
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
                gameInitialized: true
              })
            }}
          />
        </Submit>
      </SetupScreen>
    )

    // return game
    return this.state.gameInitialized === true ? game : gameSetup
  }
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, { generateGame, turnClick })(GameView)
