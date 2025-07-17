import './App.css'
import Card from './components/Card' // importing card component
import Cover from './img/cover.png'


function App() {

  return (
    <>
      <h3 className='text-3xl bg-green-500 p-3 rounded-md'>Configuring Tailwind, used Props</h3>
      {/* In h3 we are using Tailwind css */}
      <Card user="Shubh" no = "1" year="2024" img = {Cover} />
      <Card user="Shubhranshu" no = "2" year="2025" /> {/* Passing values to the props in cards */}
    </>
  )
}

export default App
