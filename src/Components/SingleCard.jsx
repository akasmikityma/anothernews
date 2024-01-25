import React from 'react'

export default function SingleCard({data}) {
  return (
    <div>
         <div className='border bg-sky-400 text-black p-3 w-96 m-4 h-96 rounded relative hover:shadow-orange-600'>
          <img src={data.urlToImage?data.urlToImage:`https://imgs.search.brave.com/fXArEBHCg1XnRCIrQhgRljgvjO2sGwDAgvd7EkavsrM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cHVibGljZG9tYWlu/cGljdHVyZXMubmV0/L3BpY3R1cmVzLzI4/MDAwMC92ZWxrYS9u/b3QtZm91bmQtaW1h/Z2UtMTUzODM4NjQ3/ODdsdS5qcGc`} alt="" className='w-full h-48' />
          <h1 className='underline p-1'>{data.title}</h1>
          <p className='text-red-600'>{data.source.name}</p>
          <a href={data.url} className='absolute bottom-4 left-4 border hover:bg-slate-200 rounded p-1 bg-yellow-400'>go there</a>
        </div>
    </div>
  )
}
