import React, { Component } from 'react'
import Nav from './Navigation/index.jsx'
import Summary from './Summary/index.jsx'
import Theme from './Theme/Theme.jsx'
import NavBar from './Navbar/navbar.jsx'
import Notepad from './Notepad/nodepad.jsx'

const topics = ['Basic', 'Affordability', 'Maintenance', 'Suitability', 'Warmth']
const themes = ['Profile', 'Housing', 'Money', 'Care/Help', 'Health', 'Social', 'Family', 'Outcomes', 'Actions', 'Notepad']
const themeIcons = {
  Profile: 'profile.svg',
  Housing: 'housing.png',
  Money: 'money.png',
  'Care/Help': 'care.png',
  'Health': 'health.png',
  Social: 'social.png',
  Family: 'family.png',
  Outcomes: 'outcomes.svg',
  Actions: 'actions.png',
  Notepad: 'notepad.svg'
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
    sm: 'col-sm-10',
    xs: 'col-xs-9',
    offset: 'col-sm-offset-2'
  },
  side: {
    m: 'col-md-3',
    sm: 'col-sm-2',
    xs: 'col-xs-3',
    offset: ''
  }
}

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      currentTheme: 'Housing',
      currentTopic: 'Basic',
      notes: '',
      actions: [
        {
          id: 1,
          action: 'get a dog',
          owner: 'John',
          dueDate: '2016-05-12'
        },
        {
          id: 2,
          action: 'get help',
          owner: 'John',
          dueDate: '2016-07-10'
        },
        {
          id: 3,
          action: 'help John',
          owner: 'Jane',
          dueDate: '2016-08-13'
        },
      ],
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
              id='topbar'
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
          <div className={`${width.side.m} ${width.side.sm} ${width.side.xs} ${width.side.offset}`}>
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
          <div className={`${width.top.m} ${width.top.sm} ${width.top.xs}`}>
          {this.state.currentTheme === 'Actions'
            ? <Summary
                actions={this.state.actions}
                changeState={this.changeState}/>
              : this.state.currentTheme === 'Notepad'
                ? <Notepad notes={this.state.notes} changeState={this.changeState} />
                : <Theme topic={this.state.currentTopic}
                actionsList={this.state.actions}
                changeState={this.changeState} />

          }
        </div>
      </div>
    </div>
    )
  }
}
