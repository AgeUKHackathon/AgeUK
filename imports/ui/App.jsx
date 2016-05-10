import React, { Component } from 'react';

export default class notApp extends Component {
    render() {
        return (
          <div>{this.props.children}</div>
        );
    }
}

notApp.propTypes = {
    children: React.PropTypes.object.isRequired,
};
