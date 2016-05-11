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
        <h1>{this.props.heading}</h1>
        <Action info={header} style={styles.th} />
        {this.props.actions.map((item, i) => {
          return (
            <div key={i}>
              <Action key='action' info={item} style={styles.tr}
                actions={this.props.actions}
                changeState={this.props.changeState}/>
              <Edit info={item} style={styles.edit}
                actions={this.props.actions}
                changeState={this.props.changeState}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Box
