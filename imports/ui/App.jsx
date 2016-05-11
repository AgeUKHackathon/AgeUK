import React, { Component } from 'react'
import Nav from './Navigation/index.jsx'
import Summary from './Summary/index.jsx'
import Theme from './Theme/Theme.jsx'
import NavBar from './Navbar/navbar.jsx'

const topics = ['Basic', 'Affordability', 'Maintenance', 'Suitability', 'Warmth']
const themes = ['Housing', 'Money', 'Care/Help', 'Health', 'Social', 'Family']
const themeIcons = {
  Housing: 'housing.png',
  Money: 'money.png',
  'Care/Help': 'care.png',
  'Health': 'health.png',
  Social: 'social.png',
  Family: 'family.png'
}

const sideBarStyle = {
  ul: {
  }
}

const topBarStyle = {
  ul: {
  }
}

const width = {
  top: {
    m: 'col-md-9',
    sm: 'col-sm-9',
    xs: 'col-xs-9',
    offset: 'col-sm-offset-2'
  },
  side: {
    m: 'col-md-2',
    sm: 'col-sm-2',
    xs: 'col-xs-9',
    offset: ''
  }
}

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      currentTheme: 'Housing',
      currentTopic: 'Basic'
    }
    this.changeState = this.changeState.bind(this)
  }
  changeState (newState) {
    this.setState(newState)
  }
  render () {
    return (
      <div>
        <NavBar />
        <div className='row'>
          <div className={`${width.top.m} ${width.top.sm} ${width.top.offset}`}>
            <Nav
              stacked=''
              initializedTheme={'Housing'}
              initializedTopic={'Basic'}
              type='topic'
              info={topics}
              icons={null}
              currentTopic={this.state.currentTopic}
              currentTheme={this.state.currentTheme}
              changeState={this.changeState}
            />
          </div>
        </div>
        <div className='row'>
          <div className={`${width.side.m} ${width.side.sm} ${width.side.offset}`}>
            <Nav
              stacked='nav-stacked'
              initializedTheme={'Housing'}
              initializedTopic={'Basic'}
              type='theme'
              info={themes}
              icons={themeIcons}
              currentTopic={this.state.currentTopic}
              currentTheme={this.state.currentTheme}
              changeState={this.changeState}
            />
          </div>
          <div className={`${width.top.m} ${width.top.sm}`}>
            <div className='container'>
              <div className='row'>
                <Theme topic={this.state.currentTopic} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
