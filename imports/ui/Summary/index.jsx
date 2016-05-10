import React, {Component} from 'react'
import Box from './Box/index.jsx'

const resources =[{ title: 'Google', url: 'http://google.com'},
  {title: 'ageUK', url: 'http://ageuk.org.uk'}]

const solutions = ['dkhgkhg', 'dhjkhkg', 'hdjkhsgk']

class Summary extends Component {
  render () {
    return (
      <div>
        <Box content={resources} heading='Resources'/>
        <Box content={solutions} heading='Solutions'/>
      </div>
    )
  }
}

export default Summary
