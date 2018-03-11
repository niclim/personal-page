import React, { Component } from 'react'

import Terminal from '../../components/Terminal'
import TextCard from '../../components/TextCard'
import {
  PageContainer,
  HeadingContainer,
  Content,
  ItemContainer
} from './Home.style'

import { options } from '../../data'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSelected: null
    }
    this.updateSelected = this.updateSelected.bind(this)
  }

  updateSelected (name) {
    this.setState({ currentSelected: name })
  }

  render () {
    return (
      <PageContainer>
        <HeadingContainer>
          <h1>Nicholas Lim</h1>
          <h2>JavaScript Developer</h2>
        </HeadingContainer>
        <Content>
          <ItemContainer>
            <TextCard>{this.state.currentSelected}</TextCard>
          </ItemContainer>
          <ItemContainer>
            <Terminal options={options} updateSelected={this.updateSelected} />
          </ItemContainer>
        </Content>
      </PageContainer>
    )
  }
}

export default Home
