import React from 'react';
import AddAction from './AddAction';
import actionsData from '../../api/actionsData';

export default class Prompt extends React.Component {
    getAction(action) {
        const actionDetails = actionsData.filter(a => a.id === action)[0];
        return actionDetails.action;
    }

    render() {
        return (
          <div>
            {this.props.prompt ?
              <div id="prompt">
                <div>{this.props.prompt}</div>
                {this.props.actions.map((action, i) => <span key={i}>{this.getAction(action)}</span>)}
                <AddAction actionsList={this.props.actionsList} actions={this.props.actions} changeState={this.props.changeState} />
              </div>
              :
              <div id="prompt">
                <div>
                  {this.props.actions.map((action, i) => <span key={i}>{this.getAction(action)}</span>)}
                  <AddAction actionsList={this.props.actionsList} actions={this.props.actions} changeState={this.props.changeState} />
                </div>
              </div>
            }
          </div>
      );
    }
}
