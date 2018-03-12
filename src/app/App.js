import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from '../pages/Home'
import Summary from '../pages/Summary'
import NoMatch from '../pages/NoMatch'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact component={Home} path='/' />
          <Route component={Summary} path='/summary' />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default App
