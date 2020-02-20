import React from 'react'

import styled from 'styled-components'

import colors from '../../styles/colors'

import Star from '../game/galaxy/Star'
import Menu from './Menu'

const GalaxyViewDiv = styled.div`
  // border: purple 3px solid;
  grid-area: galaxy;
  background: black;
  position: relative;
`

const GalaxyView = ({ galaxy: { stars } }) => {
  return (
    <GalaxyViewDiv>
      {stars.map(star => (
        <Star star={star} />
      ))}
    </GalaxyViewDiv>
  )
}

export default GalaxyView
