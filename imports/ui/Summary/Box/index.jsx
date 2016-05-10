import React, {Component} from 'react'
import Resource from './ResourceItem.jsx'
import Solution from './SolutionItem.jsx'

const styleUl = {
  listStyleType: 'none'
}

class Box extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.heading}</h2>
        <ul style={styleUl}>
          {this.props.content.map((item, i) => {
            console.log('resource or solution', item.url );
            return item.url ? <Resource url={item.url} title={item.title} key={i}/>
            : <Solution solution={item} key={i}/>
          })}
        </ul>
      </div>
    )
  }
}

export default Box
