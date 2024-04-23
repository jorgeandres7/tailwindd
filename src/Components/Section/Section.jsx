import React from 'react'
import { Noticia } from '../Noticia/Noticia'
import { extras } from '../Noticias/Noticias'


export const Section = () => {
  return (
    <>
      <section className='bg-black h-80 w-2/5'>
       

      </section>
      <section className='bg-current-700 h-100 w-2/5 border-white'>
      {extras.map(noticia => (
          <Noticia
            key={noticia.id}  // Añadido la propiedad key con el valor único del id
            idNews={noticia.id}
            img={noticia.img}
            date={noticia.date}
            Description={noticia.descripcion}
            
          />
        ))}
      </section>
    </>
  )
}

