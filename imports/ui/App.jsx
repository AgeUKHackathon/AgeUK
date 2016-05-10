import React, { Component } from 'react'
import Nav from './Navigation/index.jsx'
import Summary from './Summary/index.jsx'
import Topic from './Topic.jsx'
import {Basic, Affordability} from './Questions/hcDb.js'

const topics = ['Basic','Affordability', 'Maintenance', 'Sustainability', 'Warmth']
const qLists = {Basic: Basic, Affordability: Affordability}
const themes = ['Housing', 'Money', 'Care/Help', 'Health', 'Social', 'Family']

const sideBarStyle = {
  ul: {
  }
}

const topBarStyle = {
  ul: {
  }
}


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      componentView: 'Housing',
      topicView: 'Basic'
    }
    this.changeState = this.changeState.bind(this)
  }
  changeState(newState){
    this.setState(newState)
  }
  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-9 col-sm-offset-1'>
            <Nav stacked='' info={topics} initializedTab={'Basic'} type='topic' changeState={this.changeState}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-1 col-sm-1 col-xs-1'>
            <Nav stacked='nav-stacked' info={themes} initializedTab={'Housing'} type='theme' changeState={this.changeState}/>
          </div>
          <div className='col-md-9 col-sm-9 col-xs-9'>
            <div className='container'>
              <div className='row'>
                <Topic topicQs={qLists[this.state.topicView]}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
