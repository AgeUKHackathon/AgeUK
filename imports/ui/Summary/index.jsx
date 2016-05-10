import React, {Component} from 'react'
import Box from './Box/index.jsx'

const resources =[{ title: 'Google', link: 'http://google.com'},
  {title: 'ageUK', link: 'http://ageuk.org.uk'}]

const solutions = ['dkhgkhg', 'dhjkhkg', 'hdjkhsgk']

class Summary extends Component {
  render () {
    return (
      <div>
        <Box content={resources} />
        <Box content={solutions} />
      </div>
    )
  }
}

export default Summary
