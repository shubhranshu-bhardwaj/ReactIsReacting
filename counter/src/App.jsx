import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
   // counter is a variable while setCounter is a function / method that is initialized with 0

  const increaseValue = () => {
    setCounter(counter + 1)
  }
   // increaseValue is a method / function that we will use later in our code, it basically adds value by 1 with previous value using setCounter

  const decreaseValue = () => {
    setCounter(counter - 1)
  }
   // decreaseValue is a method / function that decrease the counter value

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={increaseValue}>
        Add value
      </button>{" "}
      {counter > 0 && ( // Adding condition so that this button will be only visible when counter > 0
        <button onClick={decreaseValue}>
          Remove value
        </button>
      )}
    </>
  )
}

export default App
