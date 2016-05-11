import React from 'react';
import Prompt from './Prompt';

export default class Question extends React.Component {
    displayConditionalQuestion() {
        $("input[type='radio']:checked").each((i, el) => {
            if (el.value === 'No') {
                $(el).parent().next().css('display', 'block');
                $(el).parent().parent().next().css('display', 'block');
            } else {
                $(el).parent().next().next().css('display', 'none');
                $(el).parent().parent().next().css('display', 'none');
            }
        });
    }

    render() {
        return (
          <div>{this.props.type === 'boolean' ?
            <div>
              <p>{this.props.question}</p>
              <div onChange={this.displayConditionalQuestion}>
                <label><input type="radio" name={this.props.question} value="Yes" />Yes</label>
                <label><input type="radio" name={this.props.question} value="No"/>No</label>
                {this.props.conditional ?
                  <div className="conditional">
                    <p>{this.props.conditional}</p>
                    <textarea />
                  </div> : ''}
              </div>
              <div className="prompt">
                {this.props.prompts ?
                <div>
                  {this.props.prompts.slice(0,Math.floor(Math.random()*3)).map((prompt, i) => <Prompt key={i} {...prompt} actionsList={this.props.actionsList} changeState={this.props.changeState}/>)}
                </div> : ''}
              </div>
            </div>
            :
            <div>
              <p>{this.props.question}</p>
              <textarea />
            </div>
          }</div>
        );
    }
}
