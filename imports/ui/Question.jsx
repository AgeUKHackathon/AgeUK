import React from 'react';

export default class Question extends React.Component {
    render() {
        return (
          <div>
            <label>{this.props.question}</label>
            <textarea placeholder="Answer"></textarea>
          </div>
        );
    }
}
