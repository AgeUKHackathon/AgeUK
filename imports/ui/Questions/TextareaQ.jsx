import React from 'react'

export default (props) => {
  return (
    <div style={props.style}>
      <textarea placeholder={props.placeholder} />
    </div>
  )
}
