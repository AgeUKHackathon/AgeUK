import React from 'react';
import Question from './Question.jsx';
import Topic from './Topic.jsx';

const data = {
    housing: {
        topic: {
            basic: [
                'What are your concerns about where you are living at the moment?',
                'Do you rent or own your home?',
                'Do you live on your own?  If not, who with?'],
            suitability: [
                'Is your housing suitable? If not, why not?',
                'Are you comfortable at home? Can you use everything easily? If not, why not?',
                'Are you able to use all of your house? If not, why not?'],
        },
    },
};

export default class Theme extends React.Component {
    render() {
        return (
          <div>
            <h1>Housing</h1>
            <Topic topic={data.housing.topic.basic} topicName="Basic" />
            <Topic topic={data.housing.topic.suitability} topicName="Suitability" />
          </div>
        );
    }
}
