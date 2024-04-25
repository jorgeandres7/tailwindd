import React from 'react'
import { Noticia } from '../Noticia/Noticia'
import { extras } from '../Noticias/Noticias'
<<<<<<< HEAD
import new2 from '../../assets/Images/Dos.png'
export const Section = () => {
  return (
 <>
 <section className='border-4 border-black h-auto w-2/5'>

<img src={new2} alt="" className='p-10 pl-28  ' />
<h1 className='text-4xl'>Barca vs PSG</h1>
<p className=''>16 abril 2024</p>
<h2 className=''>El Barça se despide de la Champions tras caer frente al PSG (1-4) en un partido marcado por la expulsión de Ronald Araújo La expulsión de Araujo y el penalti de Cancelo marcaron un partido en el que los culés empezaron con ventaja (1-4)</h2>
</section>
 <section className='border-4 border-black h-3/6 w-2/5 '>
 {extras.map(noticia => (
  <Noticia 
  idNews={noticia.idNews}
  img={noticia.img}
  date={noticia.date}
  tittle={noticia.tittle}
  Description={noticia.descripcion}/>
))

}
 </section>
 </>
=======


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
>>>>>>> b940f83ffc919bbaac23b468149fc39526ea867d
  )
}

