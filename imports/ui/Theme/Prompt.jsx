import React from 'react';

export default class Prompt extends React.Component {
  render () {
    return (
      <div>
        {this.props.prompt ?
          <div id="prompt">
            <div>{this.props.prompt}</div>
            {this.props.actions.map((action, i) => <span key={i}>{action}</span>)}
            <a className="prompt-link">Add to action list</a>
          </div>
          :
          <div id="prompt">
            <div>
              {this.props.actions.map((action, i) => <span key={i}>{action}</span>)}
              <a className="prompt-link">Add to action list</a>
            </div>
          </div>
        }
      </div>
    );
  }
}
