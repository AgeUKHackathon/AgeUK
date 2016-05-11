import React, {Component} from 'react'
import ReactDom from 'react-dom'

const emptyAction = {
  dueDate: '',
  owner: '',
  action: ''
}
export default class AddItem extends Component {
  constructor () {
    super()
    this.state = emptyAction
    this.add = this.add.bind(this)
  }
  add (e, id) {
    const newAction = {
      id: id,
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
            style={{width:'100%'}}
            value={this.state.dueDate}
            onChange={(e) => {
              const newDate = e.target.value
              this.setState({dueDate: newDate})}
            }
          />
        </div>
        <div className='col-md-2 col-sm-2 col-xs-2'>
          <textarea
            value={this.state.owner}
            onChange={(e) => {
              const newOwner = e.target.value
              this.setState({owner: newOwner})}
            }
          />
        </div>
        <div className='col-md-4 col-sm-4 col-xs-4'>
          <textarea
            value={this.state.action}
            onChange={(e) => {
              const newAction = e.target.value
              this.setState({action: newAction})}
            }
          />
        </div>
        <div className='col-md-1 col-sm-1 col-xs-1'>
          <button type="button" className="btn btn-primary"
            onClick={this.add}>
            Save
          </button>
        </div>
      </div>
    )
  }
}
