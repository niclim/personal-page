import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import App from './app'
import registerServiceWorker from './registerServiceWorker'

injectGlobal`
  html, body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
    background-color: #efefef;
    height: 100%;
  }

  #root {
    height: 100%;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
