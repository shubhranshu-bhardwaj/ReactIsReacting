import { useState } from 'react'

function App() {

  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <h3 className='text-2xl text-black text-center font-bold'>Simple Background changer using state management</h3>
        {/* setting color according to buttons using state management */}
        <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
              onClick={() => setColor('red')}
              // setting color by giving the callback to onClick
              className='outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-red-500'
            >Red
            </button>
            <button
              onClick={() => setColor('green')}
              className='outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-green-500'
            >Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
