import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () => {
    counter+=1
    setCounter(counter)
  }
  const remValue = () => {
    counter-=1
    setCounter(counter)
  }

  return (
    <>
    <h2>Pre Counter : {counter}</h2>
    <h1>By using useState Hook ,Counter: {counter}</h1>
    <button onClick={addValue}>Add</button>
    <br /><br />
    <button onClick={remValue}>Sub</button>
    <h2>Post Counter : {counter}</h2>
    </>
  )
}

export default App
