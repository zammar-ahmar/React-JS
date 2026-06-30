import { useState } from 'react'
import Cards from './components/cardsProp.jsx'
import './App.css'
/* eslint-disable @next/next/no-img-element */

export default function Card2() {
   const[count, setCount] = useState(0)
   let obj ={
      name : "John",
      age : 30,
      city : "New York"
     }

   let arr = ["apple", "banana", "cherry"]


  return (
   
    < >

    <div className='bg-gray-900'>
      <h1 className='text-center text-dark'>hello tailwind</h1>
      <Cards channel="Channel 1 " username="John" btnText="Subscribe" />
      <Cards channel="Channel 2" username="Jane" btnText="Follow" />
      </div>
    </>
  );
}