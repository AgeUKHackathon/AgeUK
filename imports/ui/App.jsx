import React, { Component } from 'react'
import Nav from './Navigation/index.jsx'
import Summary from './Summary/index.jsx'
import Theme from './Theme/Theme.jsx'

const topics = ['Basic', 'Maintenance', 'Affordability', 'Sustainability', 'Warmth']
const themes = ['Housing', 'Money', 'Care/Help', 'Health', 'Social', 'Family']

const sideBarStyle = {
  ul: {
  }
}

const topBarStyle = {
  ul: {
  }
}

const components = {

}


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      componentView: 'Housing',
      topicView: 'Maintenance'
    }
  }
  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-9 col-sm-offset-1'>
            <Nav stacked='' info={topics} initializedTab={'Maintenance'} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-1 col-sm-1 col-xs-1'>
            <Nav stacked='nav-stacked' info={themes} initializedTab={'Housing'}/>
          </div>
          <div className='col-md-9 col-sm-9 col-xs-9'>
            <div className='container'>
              <div className='row'>
                <Theme topic={this.state.topicView} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
