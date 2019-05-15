import React from 'react'

import styled from 'styled-components'

const StardateContainer = styled.div`
  border: rgba(255, 255, 255, 0.4) solid 2px;
  padding: 25px;
  color: #ffffff;
  border-radius: 25px;
`

const Stardate = ({ stardate }) => {
  return <StardateContainer>{stardate}</StardateContainer>
}

export default Stardate
