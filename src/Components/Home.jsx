import React from 'react'
import Navbar from './Navbar';
import SingleCard from './SingleCard';
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
export const Home = () => {
      const [fetchedarticles, setfetchedarticles] = useState([]);
      // const [innput, setinnput] = useState('india');
      const {category}=useParams();
      // setinnput(category);
      
      useEffect(()=>{
        const fetch_news=async()=>{
          try{
            let response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&q=${category || 'india'}&apiKey=caf5b9650b9743f5b48787805928f9a2`);
            let data=await response.json();
            setfetchedarticles(data.articles);
            console.log(fetchedarticles)
          }catch(err){
            console.log(err)
          }
        }
        //call the function 
        fetch_news();
        // setinnput(category)
      },[category])
  return (
    <div>
      <Navbar/>
        <div className='bg-slate-400 min-h-screen '>
      <div className='grid grid-cols-3 grid-rows-4 gap-5 ml-11 p-5'>
         {fetchedarticles&&fetchedarticles.map((item,index)=>(
              <SingleCard key={index} data={item}/>
          ))}
      </div>
    </div>
    </div>
  )
}
