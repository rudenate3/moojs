import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import TurnButton from './simple/TurnButton'

const Ui = styled.div``

export default class GameView extends Component {
  render() {
    return (
      <Ui>
        <div className='main'>
          <div className='content' />
          <div className='side-bar'>
            <ul class='list-group'>
              <li class='list-group-item'>Year 2500.1</li>
              <li class='list-group-item'>Ship Capacity 3/6</li>
              <li class='list-group-item'>Food +1</li>
              <li class='list-group-item'>Transports 36/100</li>
              <li class='list-group-item'>Research 34RP p/t</li>
            </ul>
          </div>
        </div>
        <div className='future-btn'>Turn</div>
        <div className='bottom-row'>
          <div className='btn btn-block btn-dark'>Colonies</div>
          <div className='btn btn-block btn-dark'>Fleets</div>
          <div className='btn btn-block btn-dark'>Races</div>
          <div className='btn btn-block btn-dark'>Info</div>
          <TurnButton />
        </div>
      </Ui>
    )
  }
}
