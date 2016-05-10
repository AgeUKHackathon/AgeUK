import React from 'react';

export default class Housing extends React.Component {
    componentDidMount() {
        this.hideTopicQuestions.bind(this);
    }

    hideTopicQuestions() {
        $("input[name='warmth']").change(() => {
            console.log(this);
            $('#warmth').css('display', 'block');
        });
    }

    render() {
        return (
          <div>
            <h1>Housing</h1>

            <fieldset>
              <h2>Basic</h2>
              <p>Where do you live at the moment?</p>
              <small>(what kind of property – flat, house etc. and how big)</small>
              <textarea />

              <p>Do you rent or own your home?</p>
              <label><input type="radio" name="rent" />Yes</label>
              <label><input type="radio" name="rent" />No</label>

              <p>Do you live on you own?</p>
              <label><input type="radio" name="rent" />Yes</label>
              <label><input type="radio" name="rent" />No</label>
              <textarea placeholder="if not who with"></textarea>
            </fieldset>

            <fieldset>
              <h3>Pick a topic to discuss...</h3>
              <label><input type="checkbox" name="affordabiility" />Affordabiility</label>
              <label><input type="checkbox" name="suitability" />Suitability</label>
              <label><input type="checkbox" name="emergencies" />Emergencies</label>
              <label><input type="checkbox" name="warmth" />Warmth</label>
            </fieldset>

            <fieldset id="affordability">
              <h4>Affordabiility</h4>
              <p>Can you afford your housing?</p>
              <label><input type="radio" name="rent" />Yes</label>
              <label><input type="radio" name="rent" />No</label>
              <p>Have you checked you're getting the benefits you're entitled to?</p>
              <label><input type="radio" name="rent" />Yes</label>
              <label><input type="radio" name="rent" />No</label>
            </fieldset>

            <fieldset id="suitability">
              <h4>Suitability</h4>
              <p>Can you afford your housing?</p>
              <label><input type="radio" name="rent" />Yes</label>
              <label><input type="radio" name="rent" />No</label>
              <p>Have you checked you're getting the benefits you're entitled to?</p>
              <label><input type="radio" name="rent" />Yes</label>
              <label><input type="radio" name="rent" />No</label>
            </fieldset>

            <fieldset id="emergencies">
              <h4>Emergencies</h4>
              <p>Can you afford your housing?</p>
              <label><input type="radio" name="rent" />Yes</label>
              <label><input type="radio" name="rent" />No</label>
              <p>Have you checked you're getting the benefits you're entitled to?</p>
              <label><input type="radio" name="rent" />Yes</label>
              <label><input type="radio" name="rent" />No</label>
            </fieldset>

            <fieldset id="warmth">
              <h4>Warmth</h4>
              <p>Can you afford your housing?</p>
              <label><input type="radio" name="rent" />Yes</label>
              <label><input type="radio" name="rent" />No</label>
              <p>Have you checked you're getting the benefits you're entitled to?</p>
              <label><input type="radio" name="rent" />Yes</label>
              <label><input type="radio" name="rent" />No</label>
            </fieldset>

          </div>
        );
    }

}
