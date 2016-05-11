import React, {Component} from 'react'

const styles = {
  img: {
    maxWidth: '35%',
    float: 'right'
  },
  a: {
    fontSize: '1.8em',
    fontFamily: "'Alegreya Sans', 'sans-serif'"

  },
  img: {
    width: '15%'
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
    : theme === 'Actions'
      ? (() => {
          this.props.changeState({currentTheme: theme})
          document.getElementById('topbar').style.display = 'none'
        })()
      : (() => {
          this.props.changeState({currentTheme: theme})
          document.getElementById('topbar').style.display = 'block'
        })()
  }

  checkActive (theme) {
    return this.props.currentTheme === theme || this.props.currentTopic === theme
    ? 'active' : ''
  }
  render() {
    return (
      <ul className={`nav nav-tabs ${this.props.stacked}`} id={this.props.id}>
        {this.props.info.map((theme, i) => {
          return (
            this.props.type === 'theme'
              ? <li className={this.checkActive(theme)} key={theme} style={styles.li}>
                  <a onClick={(e) => this.handleSelect(e, theme)} style={styles.a}>
                    {theme} <img src={this.props.icons[theme]} style={styles.img}/>
                  </a>
                </li>
              : <li className={this.checkActive(theme)} key={theme}>
                  <a onClick={(e) => this.handleSelect(e, theme)} style={styles.a}>{theme}</a>
                </li>
          )
        })}
      </ul>
    )
  }
}

export default Navigation
