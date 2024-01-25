import React from 'react'
import SingleCard from './SingleCard';
import { useState,useEffect } from 'react'
export const Home = () => {
      const [fetchedarticles, setfetchedarticles] = useState([]);

      useEffect(()=>{
        const fetch_news=async()=>{
          try{
            let response=await fetch("https://newsapi.org/v2/top-headlines?country=in&q=sports&apiKey=caf5b9650b9743f5b48787805928f9a2");
            let data=await response.json();
            setfetchedarticles(data.articles);
            console.log(fetchedarticles)
          }catch(err){
            console.log(err)
          }
        }
        //call the function 
        fetch_news();
      },[])
  return (
    <div>
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
