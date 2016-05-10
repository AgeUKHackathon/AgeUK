import React from 'react'

export default (props) => {
  return (
    <div>
      {props.list.map(item => <label><input type="checkbox" name={item} />{item}</label>)}
    </div>
  )
}
