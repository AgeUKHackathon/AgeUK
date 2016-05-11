import React from 'react';
import Question from './Question';

export default class Topic extends React.Component {
    render() {
        return (
          <div>
            {this.props.topic.map((q, i) => <Question key={q.question} {...q} />)}
          </div>
        );
    }
}
