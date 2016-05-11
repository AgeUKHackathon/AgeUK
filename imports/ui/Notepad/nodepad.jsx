import React, {Component} from 'react'
import reactDOM from 'react-dom'

const styles = {
  textarea: {
    height: '70vh'
  }
}

export default class Notepad extends Component {
  constructor () {
    super()
    this.getNotes = this.getNotes.bind(this)
  }
  componentDidMount() {
    this.setState({notes: this.props.notes})
  }
  getNotes () {
    this.props.changeState({notes: reactDOM.findDOMNode(this.refs['notes']).value})
  }
  render () {
    this.props.notes
    return (
      <div>
        <h2>Case notes</h2>
        <textarea ref='notes' style={styles.textarea}
          value={this.props.notes}
          onChange={this.getNotes}>
        </textarea>
      </div>
    )
  }
}
