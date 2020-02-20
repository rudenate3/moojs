import React from 'react'

import styled from 'styled-components'

import InfoButton from '../simple/InfoButton'
import TurnButton from '../simple/TurnButton'

const FooterDiv = styled.div`
  // border: yellow 3px solid;
  border-top: rgba(255, 255, 255, 0.2) 1px solid;
  padding: 10px 25px;
  grid-area: footer;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: space-evenly;
  align-items: center;
  background-color: #5e5c5c;
`

const Footer = props => {
  return (
    <FooterDiv>
      <InfoButton title='Colonies' />
      <InfoButton title='Fleets' />
      <InfoButton title='Empires' />
      <InfoButton title='Info' />
      <TurnButton {...props} />
    </FooterDiv>
  )
}

export default Footer
