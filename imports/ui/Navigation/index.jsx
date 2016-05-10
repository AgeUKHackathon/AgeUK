import React, {Component} from 'react'

class Navigation extends Component {
  constructor() {
    super()
    this.state = {activeTab: ''}
    this.handleSelect = this.handleSelect.bind(this)
    this.checkActive = this.checkActive.bind(this)
  }
  componentDidMount() {
    this.setState({activeTab: this.props.initializedTab})
  }

  handleSelect(e, theme) {
    console.log(e)
    this.setState({activeTab: theme})
  }

  checkActive (theme) {
    return this.state.activeTab === theme ? 'active' : ''
  }
  render() {
    return (
      <ul className={`nav nav-tabs ${this.props.stacked}`}>
        {this.props.info.map(theme => {
          return (
            <li className={this.checkActive(theme)}>
              <a onClick={(e) => this.handleSelect(e, theme)}>{theme}</a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Navigation
