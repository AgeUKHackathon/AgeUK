import React, {Component} from 'react'
// import Resource from './ResourceItem.jsx'
import Action from './ActionItem.jsx'
import Edit from './EditItem.jsx'
import Add from './Add.jsx'

const actionHeight = '7vh'

const styles = {
  tr: {
    fontStyle: 'italics',
    fontSize: '1.2em',
    height: actionHeight,
    lineHeight: actionHeight
  },
  edit: {
    display: 'none'
  },
  th: {
    fontWeight: 'bold',
    fontSize: '1.8em'
  }
}

const header = {
  dueDate: 'Due Date',
  owner: 'Owner',
  action: 'Action'
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
        <Add
          actions={this.props.actions}
          changeState={this.props.changeState}
        />
      </div>
    )
  }
}

export default Box
