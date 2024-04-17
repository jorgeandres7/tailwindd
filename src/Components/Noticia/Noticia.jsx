import React from 'react'

export const Noticia = ({idNews,img,date,tittle,Description}) => {
  return (
    <div id={idNews}>
    <div>{img}</div>
    <div className='w-full h-12'>
   <p>{date}</p>
   <h1>{tittle}</h1>
   <h1>{Description}</h1>
    
   </div>
    </div>
  )
}
