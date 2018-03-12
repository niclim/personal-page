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

  h1 {
    color: #000;
  }

  h2, h3, h4, h5, h6 {
    font-weight: normal;
    color: #333;
  }

  p {
    color: #444;
  }

  a {
    text-decoration: none;
    color: #d0021b;
  }

  #root {
    height: 100%;
    display: flex;

    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
