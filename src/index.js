import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Normalize } from 'styled-normalize'

import App from './App'
import * as serviceWorker from './serviceWorker'

import { createGlobalStyle } from 'styled-components'

import colors from './styles/colors'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Orbitron');
body {
  background: ${colors.background};
  font-family: 'Orbitron', sans-serif;
}
`

ReactDOM.render(
  <Fragment>
    <Normalize />
    <GlobalStyles />

    <App />
  </Fragment>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
