import React from 'react'
import { Noticia } from '../Noticia/Noticia'
import { extras } from '../Noticias/Noticias'

export const Section = () => {
  return (
 <>
 <section className='bg-black h-80 w-2/5'>
{extras.map(noticia => (
  <Noticia 
  idNews={noticia.idNews}
  img={noticia.img}
  date={noticia.date}
  tittle={noticia.tittle}
  Description={noticia.Description}/>
))

}
 </section>
 <section className='bg-blue-700 h-80 w-2/5 border-white'>

 </section>
 </>
  )
}
