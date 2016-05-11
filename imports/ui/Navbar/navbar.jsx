import React from 'react'

const styles = {
  div: {
    textAlign: 'center',
    backgroundColor: '#4F4F7F',
    paddingTop: '10px'
  },
  h1: {
    display: 'inline',
    color: 'white',
    textWeight: '400'
  },
  button: {
    marginLeft: '2em',
    marginBottom: '10px',
    fontSize: '1.3em'
  }
}

export default () => {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>You're having a conversation with John Doe</h1>
      <button style={styles.button}>edit</button>
    </div>
  )
}
