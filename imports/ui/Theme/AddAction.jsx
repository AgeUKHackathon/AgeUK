import React from 'react';
import actionsData from '../../api/actionsData';

export default class AddAction extends React.Component {
    addAction(e, action) {
        const newAction = actionsData.filter(a => a.id === action[0]);
        this.props.changeState({actions: [...this.props.actionsList, newAction[0]]});
    }

    render() {
        return (
          <a className="prompt-link" onClick={(e) => {this.addAction(e, this.props.actions)}}>Add to action list</a>
        );
    }
}
