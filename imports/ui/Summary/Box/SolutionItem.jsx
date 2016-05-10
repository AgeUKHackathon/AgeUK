import React from 'react'

export default (props) => {
  return (
    <div>
      <li style={{display:'inline-block'}}>{props.solution}</li>
      <button>Remove</button>
    </div>
  )
}
