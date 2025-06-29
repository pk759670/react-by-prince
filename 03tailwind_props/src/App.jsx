import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 let myObj={
  username:"Om",
  age:"21"
 }
 let myArr=[7,5,3]
  return (
    <>
      <h1 className='bg-green-400 text-red-400 p-4 rounded-xl mb-1.5'>Tailwind Test</h1>
      <Card myname="Prince Kumar" newObj={myObj} newArr={myArr} btnText="Vist me"/>
      <Card btnText="Click me"/>
    </>
  )
}

export default App
