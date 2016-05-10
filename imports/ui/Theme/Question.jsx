import React from 'react';

export default class Question extends React.Component {
    render() {
        return (
          <div>{this.props.type === 'boolean' ?
            <div>
              <p>{this.props.question}</p>
              <label><input type="radio" name={this.props.question} />Yes</label>
              <label><input type="radio" name={this.props.question} />No</label>
            </div>
            :
            <div>
              <p>{this.props.question}</p>
              <textarea />
            </div>
          }</div>
        );
    }
}
