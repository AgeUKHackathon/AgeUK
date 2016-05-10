import React from 'react';
import Question from './Question';

export default class Topic extends React.Component {
    render() {
        return (
          <div>
            <h2>{this.props.topicName}</h2>
            <ul>
              {this.props.topic.map((question, index) =>
                <Question key={index} question={question} />
              )}
            </ul>
          </div>
        );
    }
}
