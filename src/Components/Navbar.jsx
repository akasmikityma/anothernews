import React, { useEffect } from 'react'
import { Home } from './Home.jsx';
import { Link, useNavigate, useParams, } from 'react-router-dom';
import { useState } from 'react';
export default function Navbar() {
  const [input, setInput] = useState('');
  const navigate=useNavigate();
  const handleCategoryChange=(event)=>{
    //  event.preventDefault();
     let tergetCat=event.target.value;
     navigate(`/${tergetCat}`);
  }
  return (
    <nav>
    <div className='bg-slate-800  text-white'>
        <div className=' flex justify-between items-center mx-14 p-8'>
            <h1 className='text-lg'>Navbar</h1>
            <div className='text-lg'>
            <div>
      <label htmlFor="dropdown">Choose a Category: </label>
      <select
        id="dropdown"
        name="dropdown"
        className='text-black rounded'
        onChange={handleCategoryChange}
      >
        <option value="Health" className='text-black'>Health</option>
        <option value="Business" className='text-black'>Business</option>
        <option value="Sports" className='text-black'>Sports</option>
        <option value="Politics" className='text-black'>Politics</option>
        <option value="Technology" className='text-black'>Technology</option>
        <option value="Food" className='text-black'>Food</option>
      </select>
    </div>
            </div>
            <div className='flex items-center gap-2'>
            <input type="text" name="category" id="" placeholder='type category' className='border-red-950 text-black rounded w-48 h-8 text-center' onChange={(e)=>{
               e.preventDefault();
               var value = e.target.value;
              //  onInputChange(value);
               setInput(value);
            }}/>
           
          <Link to={`/${input}`}>
          <button className='rounded border bg-slate-300 p-1 w-10 h-8 text-center text-black 'onClick={()=>{
              console.log(input)
              // navigate(`/${input}`)
            }}>go</button>
          </Link>
            </div>
        </div>
    </div>
    </nav>
  )
}
