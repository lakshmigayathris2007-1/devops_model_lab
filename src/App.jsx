import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incre = () =>
  {
   setCount(count+1);
  };
  const decre =()=>
  {
    setCount(count-1);
  };
  return (
    <>
      <h1>DigitalCounter</h1>
      <button onClick ={incre}>Increment</button>
      <button onClick ={decre}>Decrement</button>
      <h2>{count}</h2>
    </>
  )
}

export default App
