import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('skyblue')


  return (
   <div className= "w-full h-screen duration-200" style={{ backgroundColor: color }}>
    <div className="flex flex-wrap  justify-center inset-x-0 px-2">
      <div className="bg-white rounded-full p-2 m-2 gap-5 flex flex-wrap justify-center">
   <button onClick={() => setColor('red')}
    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-200">Red</button>
   <button onClick={() => setColor('blue')} 
   className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200">Blue</button>
   <button onClick={() => setColor('green')} 
   className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-200">Green</button>
   <button onClick={() => setColor('yellow')}
    className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-200">Yellow</button>
   <button onClick={() => setColor('purple')}
    className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-200">Purple</button>
    <button onClick={() => setColor('orange')}
    className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-200 ">Orange</button>
      </div>
    </div>
   </div>
  )
}

export default App
