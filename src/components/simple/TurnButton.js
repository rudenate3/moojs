import React from 'react'

import styled from 'styled-components'

import colors from '../../styles/colors'

const Button = styled.button`
  height: 70px;
  width: 100px;
  padding: 25px;
  font-size: 1.2em;
  font-weight: 700;
  color: ${colors.blue1};
  text-shadow: ${colors.blue1} 2px 2px 3px;
  background: ${colors.blue2};
  border: 1px solid ${colors.blue1};
  box-shadow: 0 0 15px ${colors.blue1};
  border-radius: 15px;
  margin-bottom: 25px;
  :hover {
    box-shadow: 0 2px 25px ${colors.blue1};
  }
  :active {
    box-shadow: 0 0 8px ${colors.blue1};
  }
`

const TurnButton = () => {
  return <Button>Turn</Button>
}

export default TurnButton
