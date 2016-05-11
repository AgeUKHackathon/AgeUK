import React from 'react';
import Question from './Question';

export default class Topic extends React.Component {
    render() {
        return (
          <div>
            <h1></h1>
            {this.props.topic.map((q, i) => <Question key={i} {...q} />)}
          </div>
        );
    }
}
