import React from 'react';

export default class Question extends React.Component {
    displayConditionalQuestion() {
        $("input[type='radio']:checked").each((i, el) => {
            if (el.value === 'No') {
                $(el).parent().next('.conditional').css('display', 'block');
            } else {
                $('.conditional').css('display', 'none');
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
