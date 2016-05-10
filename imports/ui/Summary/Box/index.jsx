import React, {Component} from 'react'
import Resource from './ResourceItem.jsx'
import Solution from './SolutionItem.jsx'

class Box extends Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.content.map((item) => {
            return item.link ? <Resource link={item.link} title={item.title}/>
            : <Solution solution={item} />
          })}
        </ul>
      </div>
    )
  }
}

export default Box
