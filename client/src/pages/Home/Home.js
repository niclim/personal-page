import React, { Component } from 'react'

import Terminal from '../../components/Terminal'

const options = {
  selectMessage: '',
  message: 'Welcome',
  children: [
    {
      selectMessage: 'Select this message',
      message: 'Extra information in this thing',
      children: null
    },
    {
      selectMessage: 'Select this other message',
      message: 'test test',
      children: null
    },
    {
      selectMessage: 'things of things',
      message: 'Message is a test for children in children',
      children: [
        {
          selectMessage: 'Select this message',
          message: 'Extra information in this thing',
          children: null
        }
      ]
    }
  ]
}

class Home extends Component {
  render () {
    return (
      <div>
        <Terminal options={options} />
      </div>
    )
  }
}

export default Home
