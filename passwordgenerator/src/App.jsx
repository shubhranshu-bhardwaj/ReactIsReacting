import { useState, useCallback, useEffect, useRef } from "react"


function App() {
  const [length, setLength] = useState(8) // creating state for length with initial length 8
  const [numberAllowed, setNumberAllowed] = useState(false) // creating state for adding number or not
  const [charAllowed, setCharAllowed] = useState(false) // char allowed or not
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null) // assigning reference

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789" // condition
    if(charAllowed) str += "!@#$%^&*()_+"

    // Using for loop for generating password using Math.Random
    for(let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass) // setting password 

  }, [length, numberAllowed, charAllowed]) // [length, numberAllowed, charAllowed] dependencies

  // Method for copying the password
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select() // selecting password on copy
    
  }

  useEffect(() =>{
    generatePassword()
  },[length, numberAllowed, charAllowed]) // [length, numberAllowed, charAllowed] dependencies

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h3 className='text-white text-center my-3'>Password Generator</h3>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef} // providing reference
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">

            <input
              type="range"
              min={6}
              max={18}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""
            />
            <label htmlFor="length">Lenght: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
                // callback function, taking previous value and reversing it
              }}
              name=""
              id=""
            />
            <label htmlFor="number">Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            defaultChecked = {charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            type="checkbox" 
            name="" 
            id="" 
            />
            <label htmlFor="character">Character</label>
          </div>
          

        </div>
      </div>
    </>
  )
}

export default App
