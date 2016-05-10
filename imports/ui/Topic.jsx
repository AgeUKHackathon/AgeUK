import React from 'react';
import CheckboxList from './Questions/CheckboxList.jsx'
import Question from './Questions/index.jsx'

export default class Topic extends React.Component {
  render() {
    return (
      <div>
        <h1>Housing</h1>
        {this.props.topicQs.map(question => <Question question={question} />)}
      </div>
    )
  }
}
