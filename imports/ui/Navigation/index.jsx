import React, {Component} from 'react'
import {Nav, NavItem} from 'react-bootstrap'

class Navigation extends Component {
  constructor() {
    super()
    this.state = {activeTab: 1}
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(eventKey) {
    console.log(eventKey);
    this.setState({activeTab: eventKey})
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey={this.state.activeTab} onSelect={this.handleSelect}>
        <NavItem eventKey={1}>Maintenance</NavItem>
        <NavItem eventKey={2} title="Item">Affordability</NavItem>
        <NavItem eventKey={3}>Suitability</NavItem>
        <NavItem eventKey={4}>Warmth</NavItem>
      </Nav>
    )
  }
}

export default Navigation 
