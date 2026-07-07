import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (symbolAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numberAllowed, symbolAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <div className='mx-auto h-screen bg-black flex items-center justify-center'>
      <div className="w-full max-w-md mx-auto p-5 text-amber-500 bg-gray-500 rounded-lg">
        <h3 className='text-center text-3xl font-bold p-4'>Password Generator</h3>

        <div className='flex shadow-sm rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            ref={passwordRef}
            placeholder='Your Password'
            value={password}
            readOnly
            className='w-full py-2 px-4 text-gray-800 bg-white outline-none'
          />
          <button
            onClick={copyPasswordToClipboard}
            className='shrink-0 text-white bg-amber-500 hover:bg-amber-600 active:bg-amber-700 transition-colors px-4 font-medium'
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className='flex text-sm gap-x-4 items-center'>
          <div className='flex items-center gap-x-1 flex-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer w-full'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className='whitespace-nowrap'>Length: {length}</label>
          </div>
        </div>

        <div className='flex text-sm gap-x-4 mt-3'>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={symbolAllowed}
              id="symbolInput"
              onChange={() => setSymbolAllowed(prev => !prev)}
            />
            <label htmlFor="symbolInput">Symbols</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
