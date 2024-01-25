import React, { useEffect } from 'react'
import { Home } from './Home.jsx';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
export default function Navbar() {
  const [input, setInput] = useState('');
  // const navigate=useParams();
  return (
    <div className='bg-slate-800  text-white'>
        <div className=' flex justify-between items-center mx-14 p-8'>
            <h1 className='text-lg'>Navbar</h1>
            <div className='text-lg'>
            <label htmlFor="dropdown">Choose an Category:  </label>
                <select id="dropdown" name="dropdown" className='text-black rounded'>
                    <option value="option1" className='text-black'>Category 1</option>
                    <option value="option2" className='text-black'>Category 2</option>
                    <option value="option3" className='text-black'>Category 3</option>
                    <option value="option1" className='text-black'>Category 4</option>
                    <option value="option1" className='text-black'>Category 5</option>
                    <option value="option1" className='text-black'>Category 6</option>
                </select>
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
  )
}
