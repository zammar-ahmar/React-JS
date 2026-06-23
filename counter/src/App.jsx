import { useState } from 'react'
import './App.css'



//   **Hooks** = functions that let function components use React features (state, lifecycle, etc.)
//  without being classes. They all start with `use` (`useState`, `useEffect`, `useRef`...)
//  and must be called at the top level of a component.

// **Which one we used:** `useState`

// **How:**
// ```jsx
// const [counter, setCounter] = useState(() => Math.floor(Math.random() * 10))
// ```
// - `counter` → current value, persists across renders
// - `setCounter` → updates the value **and** triggers a re-render (this is what your original code was missing)
// - We call it as `setCounter(prev => prev + 1)` to safely update based on the latest value.


function App() {
  const [counter, setCounter] = useState(() => Math.floor(Math.random() * 10))

  const addValue = () => {
    setCounter((prev) => prev + 1)
    console.log("clicked ", Math.random())
  }

  const removeValue = () => {  
    if (counter === 0) return
    setCounter((prev) => prev - 1)
    console.log("clicked ", Math.random())
  }

  return (
    <div>
      <h1>Hello, Vite + React!</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </div>
  )
}

export default App