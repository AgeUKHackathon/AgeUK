import React from 'react';

const Housing = () =>
  <div>
    <h1>Housing</h1>
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

  </div>;

export default Housing;
