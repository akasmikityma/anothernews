import React, { useState } from 'react'
import { Home } from './Components/Home'
import Navbar from './Components/Navbar'
export default function App() {
  const [input, setInput] = useState('');

  const handleInputChange = (value) => {
    setInput(value);
  };
  return (
    <div>
      <Navbar />
      <Home/>
    </div>
  )
}
