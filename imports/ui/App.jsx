import React, { Component } from 'react'
import Nav from './Navigation/index.jsx'

const topics = ['Maintenance', 'Affordability', 'Sustainability', 'Warmth']
const themes = ['Housing', 'Money', 'Care/Help', 'Health', 'Social', 'Family']

const sideBarStyle = {
  ul: {
    width: '15%'
  }
}

const topBarStyle = {
  ul: {
    width: '70%',
    margin: '0 auto'
  }
}

export default class App extends Component {
  render () {
    return (
      <div>
        <Nav stacked='' info={topics} style={topBarStyle}/>
        <Nav stacked='nav-stacked' info={themes} style={sideBarStyle}/>
      </div>
    )
  }
}
