import React from 'react';
import Topic from './Topic';
import data from '../../api/data';

export default class Theme extends React.Component {
    render() {
        return (
          <div>
            <Topic
              topic={data.housing[this.props.topic.toLowerCase()]}
              changeState={this.props.changeState}
              actionsList={this.props.actionsList} />
          </div>
        );
    }

}
