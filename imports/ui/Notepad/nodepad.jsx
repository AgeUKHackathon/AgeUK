import React from 'react'

const styles = {
  textarea: {
    height: '70vh'
  }
}

export default () => {
  return (
    <div>
      <h2>Case notes</h2>
      <textarea style={styles.textarea}></textarea>
    </div>
  )
}
