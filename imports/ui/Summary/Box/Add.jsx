import React, {Component} from 'react'
import ReactDom from 'react-dom'
import uuid from 'uuid'

const dateConverter = (ISODate) => {
  // "2016-05-06T10:04:05.101Z"
  const unformattedDate = ISODate.split('T')[0].split('-')
  const YY = unformattedDate[0]
  const MM = unformattedDate[1]
  const DD = unformattedDate[2]
  return `${YY}-${MM}-${DD}`
}

const emptyAction = {
  dueDate: dateConverter((new Date).toISOString()),
  owner: '',
  action: ''
}
const inputSize = '14px'

export default class AddItem extends Component {
  constructor () {
    super()
    this.state = emptyAction
    this.add = this.add.bind(this)
  }
  add (e) {
    const newAction = {
      id: uuid.v1(),
      dueDate: this.state.dueDate,
      owner: this.state.owner,
      action: this.state.action
    }
    this.props.changeState({actions: [...this.props.actions, newAction]})
    this.setState(emptyAction)
  }
  render () {
    return (
      <div className='row' style={this.props.style}>
        <div className='col-md-2 col-sm-2 col-xs-2'>
          <input type='date'
            style={{width:'100%', fontSize: inputSize}}
            value={this.state.dueDate}
            onChange={(e) => {
              const newDate = e.target.value
              this.setState({dueDate: newDate})}
            }
          />
        </div>
        <div className='col-md-2 col-sm-2 col-xs-2'>
          <textarea
            style={{width:'100%', fontSize: inputSize, lineHeight: inputSize}}
            value={this.state.owner}
            onChange={(e) => {
              const newOwner = e.target.value
              this.setState({owner: newOwner})}
            }
          />
        </div>
        <div className='col-md-4 col-sm-4 col-xs-4'>
          <textarea
            style={{width:'100%', fontSize: inputSize, lineHeight: inputSize}}
            value={this.state.action}
            onChange={(e) => {
              const newAction = e.target.value
              this.setState({action: newAction})}
            }
          />
        </div>
        <div className='col-md-2 col-sm-2 col-xs-2'>
          <button type="button" className="btn btn-primary"
            style={{width: '75%'}}
            onClick={this.add}>
            Add
          </button>
        </div>
      </div>
    )
  }
}
