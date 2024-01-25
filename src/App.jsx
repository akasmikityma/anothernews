import React, { useState } from 'react'
import { Home } from './Components/Home'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom';
export default function App() {
  const [input, setInput] = useState('');

  const handleInputChange = (value) => {
    setInput(value);
  };
  return (
    <Routes>
      
      <Route path='/' element={<Navbar/>}/>
      <Route path='/:category' element={<Home/>}/>

       </Routes>
  )
}
