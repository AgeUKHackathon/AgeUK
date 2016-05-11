import React, {Component} from 'react'
import ReactDom from 'react-dom'

export default class ActionItem extends Component {
  constructor () {
    super()
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
  }
  remove (event, id) {
    const newActions = this.props.actions.filter(action => action.id !== id)
    this.props.changeState({actions: newActions})
  }
  edit (event, id) {
    const itemToEdit = document.getElementById(`edit-${id}`)
    itemToEdit.style.display = 'block'
  }
  render () {
    return (
      <div className='row' style={this.props.style}>
        <div className='col-md-2 col-sm-2 col-xs-2'>
          {this.props.info.dueDate}
        </div>
        <div className='col-md-2 col-sm-2 col-xs-2'>
          {this.props.info.owner}
        </div>
        <div className='col-md-4 col-sm-4 col-xs-4'>
          {this.props.info.action}
        </div>
        {!this.props.info.id ? ''
          : <div className='col-md-1 col-sm-1 col-xs-1'>
              <button type="button" className="btn btn-warning"
                onClick={(e) => {this.edit(e, this.props.info.id)}}>
                Edit
              </button>
            </div>
        }
        {!this.props.info.id ? ''
          : <div className='col-md-1 col-sm-1 col-xs-1'>
              <button type="button" className="btn btn-danger"
                onClick={(e) => {this.remove(e, this.props.info.id)}}>
                Remove
              </button>
            </div>
        }
    </div>
  )
  }
}
