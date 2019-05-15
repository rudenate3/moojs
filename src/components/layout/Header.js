import React from 'react'

import styled from 'styled-components'
import Stardate from '../simple/Stardate'

const HeaderDiv = styled.div`
  // border: red 3px solid;
  grid-area: header;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
  border-bottom: rgba(255, 255, 255, 0.2) 1px solid;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
`

const Brand = styled.h1`
  color: #ffffff;
  font-size: 2.2em;
  font-weight: 700;
`

const Header = () => {
  return (
    <HeaderDiv>
      <Brand>MooJS</Brand>
      <div />
      <div />
      <div />
      <Stardate stardate={3500.1} />
    </HeaderDiv>
  )
}

export default Header
