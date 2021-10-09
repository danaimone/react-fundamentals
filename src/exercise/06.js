// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')

  function handleChange(e) {
    const {value} = e.target
    setUsername(value.toLowerCase())
    // setError(isLowerCase ? null : 'Username must be lower case')
  }

  const usernameInputRef = React.useRef()
  function handleSubmit(e) {
    e.preventDefault()
    const input = usernameInputRef.current.value
    onSubmitUsername(input)
  }
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <div style={{color: 'red'}}> {error} </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
