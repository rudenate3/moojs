import React from 'react'

import styled from 'styled-components'

const StarStyle = styled.div`
  cursor: pointer;
  color: yellow;
  font-size: 1em;
  text-shadow: white 1px 1px 20px;
  position: absolute;
  top: ${props => props.y}%;
  left: ${props => props.x}%;
`

const Star = ({ star: { color, name, x, y } }) => {
  return (
    <StarStyle x={x} y={y}>
      <span className={`icon-${color}-star`} />
    </StarStyle>
  )
}

export default Star
