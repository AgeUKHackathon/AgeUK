import React from 'react';
import AddAction from './AddAction'

export default class Prompt extends React.Component {
  render () {
    return (
      <div>
        {this.props.prompt ?
          <div id="prompt">
            <div>{this.props.prompt}</div>
            {this.props.actions.map((action, i) => <span key={i}>{action}</span>)}
            <AddAction actionsList={this.props.actionsList} actions={this.props.actions} changeState={this.props.changeState} />
          </div>
          :
          <div id="prompt">
            <div>
              {this.props.actions.map((action, i) => <span key={i}>{action}</span>)}
              <AddAction actionsList={this.props.actionsList} actions={this.props.actions} changeState={this.props.changeState} />
            </div>
          </div>
        }
      </div>
    );
  }
}
