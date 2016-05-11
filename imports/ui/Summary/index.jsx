import React, {Component} from 'react'
import Box from './Box/index.jsx'

const resources =[{ title: 'Google', url: 'http://google.com'},
  {title: 'ageUK', url: 'http://ageuk.org.uk'}]

const solutions = ['dkhgkhg', 'dhjkhkg', 'hdjkhsgk']

class Summary extends Component {
  render () {
    return (
      <Box
        heading='Actions'
        actions={this.props.actions}
        changeState={this.props.changeState}
      />
    )
  }
}

export default Summary
