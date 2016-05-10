import React from 'react'
import RadioQ from './RadioQ.jsx'
import TextareaQ from './TextareaQ.jsx'


export default (props) => {
  return (
    <div>
      <h2>{props.question.title}</h2>
      <p>{props.question.question}</p>
      <RadioQ options={props.question.options} style={{}}/>
    </div>
  )
}
