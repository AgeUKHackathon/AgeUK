import React, {Component} from 'react'

const styles = {
  img: {
    maxWidth: '35%',
    float: 'right'
  }
}

class Navigation extends Component {
  constructor() {
    super()
    this.handleSelect = this.handleSelect.bind(this)
    this.checkActive = this.checkActive.bind(this)
  }
  componentDidMount() {
    this.props.changeState({
      currentTopic: this.props.initializedTopic,
      currentTheme: this.props.initializedTheme
    })
  }

  handleSelect(e, theme) {
    this.props.type === 'topic'
    ? this.props.changeState({currentTopic: theme})
    : this.props.changeState({currentTheme: theme})
  }

  checkActive (theme) {
    return this.props.currentTheme === theme || this.props.currentTopic === theme
    ? 'active' : ''
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
