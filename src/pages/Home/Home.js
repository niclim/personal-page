import React, { Component } from 'react'

import Terminal from '../../components/Terminal'
import TextCard from '../../components/TextCard'
import {
  PageContainer,
  HeadingContainer,
  Content,
  TextContainer,
  TerminalContainer,
  Footer
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
          <h2>Full Stack Web Developer</h2>
        </HeadingContainer>
        <Content>
          <TextContainer>
            <TextCard>{this.state.currentSelected}</TextCard>
          </TextContainer>
          <TerminalContainer>
            <Terminal options={options} updateSelected={this.updateSelected} />
          </TerminalContainer>
        </Content>
        <Footer>
          This is the footer
        </Footer>
      </PageContainer>
    )
  }
}

export default Home
