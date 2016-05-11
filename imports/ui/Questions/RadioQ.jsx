import React from 'react'

export default (props) => {
  return (
    <div style={props.style}>
      {props.options.map(option => {
        return (
          <label key={option}>
            <input type="radio" name={option} />{option}
          </label>
        )
      })}
    </div>
  )
}
