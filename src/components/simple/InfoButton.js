import React from 'react'

import styled from 'styled-components'

import colors from '../../styles/colors'

const Button = styled.button`
  height: 90%;
  width: 12vw;
  padding: 25px;
  font-size: 1.2em;
  font-weight: 100;
  color: ${colors.blue1};
  text-shadow: ${colors.blue1} 2px 2px 3px;
  background: ${colors.blue2};
  border: 1px solid ${colors.blue1};
  box-shadow: 0 0 15px ${colors.blue1};
  border-radius: 15px;
  transition: transform 300ms ease-in-out;
  :hover {
    box-shadow: 0 2px 25px ${colors.blue1};
    transition: transform 300ms ease-in-out;
  }
  :active {
    box-shadow: 0 0 8px ${colors.blue1};
    transition: transform 300ms ease-in-out;
  }
`

const InfoButton = ({ onClick, title }) => {
  return <Button onClick={onClick}>{title}</Button>
}

export default InfoButton
