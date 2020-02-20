import React from 'react'

import styled from 'styled-components'

import colors from '../../styles/colors'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  z-index: 5;
`

const Modal = styled.div`
  position: absolute;
  top: 15%;
  left: 35%;
  height: 500px;
  width: 500px;
  background: ${colors.blue2}
  border: 3px solid ${colors.blue1};
  box-shadow: 0 0 15px ${colors.blue1};
  z-index: 1;
`

const Menu = ({ children }) => {
  return (
    <Container>
      <Modal />
      {children}
    </Container>
  )
}

export default Menu
