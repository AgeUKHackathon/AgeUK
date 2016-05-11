import React, {Component} from 'react'
import ReactDom from 'react-dom'

const inputSize = '14px'

export default class EditItem extends Component {
  constructor () {
    super()
    this.state = {
      dueDate: '',
      owner: '',
      action: ''
    }
    this.save = this.save.bind(this)
  }
  componentDidMount () {
    this.setState({
      dueDate: this.props.info.dueDate,
      owner: this.props.info.owner,
      action: this.props.info.action
    })
  }
  save (e, id) {
    const savedAction = {
      id: id,
      dueDate: this.state.dueDate,
      owner: this.state.owner,
      action: this.state.action
    }
    const newActions = this.props.actions.map(action => {
      return action.id === id ? savedAction: action
    })
    this.props.changeState({actions: newActions})
    document.getElementById(`edit-${id}`).style.display = 'none'
  }
  render () {
    return (
      <div className='row' style={this.props.style} id={`edit-${this.props.info.id}`}>
        <div className='col-md-2 col-sm-2 col-xs-2'>
          <input type='date'
            value={this.state.dueDate}
            onChange={(e) => {
              const newDate = e.target.value
              this.setState({dueDate: newDate})}
            }
          />
        </div>
        <div className='col-md-2 col-sm-2 col-xs-2'>
          <textarea
            style={{lineHeight: inputSize}}
            value={this.state.owner}
            onChange={(e) => {
              const newOwner = e.target.value
              this.setState({owner: newOwner})}
            }
          />
        </div>
        <div className='col-md-4 col-sm-4 col-xs-4'>
          <textarea
            style={{lineHeight: inputSize}}
            value={this.state.action}
            onChange={(e) => {
              const newAction = e.target.value
              this.setState({action: newAction})}
            }
          />
        </div>
        <div className='col-md-2 col-sm-2 col-xs-2'>
          <button type="button" className="btn btn-warning"
            style={{width: '75%'}}
            onClick={(e) => {this.save(e, this.props.info.id)}}>
            Save
          </button>
        </div>
      </div>
    )
  }
}
