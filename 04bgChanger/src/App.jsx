import { useState } from "react"


function App() {
const [color, setColor] =  useState('olive')
const tailwindColors = {
  red: '#dc2626',   // red-600
  green: '#16a34a', // green-600
  blue: '#2563eb',  // blue-600
  pink: '#db2777',  // pink-600
  white: '#ffffff',
  yellow: '#facc15',//yellow-600
};

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed top-12 left-1/4 gap-3 mx-4 p-4 bg-amber-700 rounded-2xl flex flex-wrap items-center justify-around">
          <button onClick={()=>{setColor('red')}} className="px-4 py-1 rounded-full bg-red-600 text-white">Red</button>
          <button onClick={()=>setColor('green')} className="px-4 py-1 rounded-full bg-green-600 text-white">Green</button>
          <button onClick={()=>{setColor('blue')}} className="px-4 py-1 rounded-full bg-blue-600 text-white">Blue</button>
          <button onClick={()=>{setColor(tailwindColors.pink)}} className="px-4 py-1 rounded-full bg-pink-600 text-white">Pink</button>
          <button onClick={()=>{setColor('white')}} className="px-4 py-1 rounded-full bg-white ">White</button>
          <button onClick={()=>setColor(tailwindColors.yellow)} className="px-4 py-1 rounded-full bg-yellow-600 text-white">Yellow</button>

        </div>
    </div>
  )
}

export default App
