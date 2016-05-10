import React from 'react'

export default class Question extends React.Component {
  render () {
    return (
      <div>
        <label>this is a question</label>
        <textarea placeholder='answer'></textarea>
      </div>
    )
  }
}
