import React from 'react'
import { Noticia } from '../Noticia/Noticia'
import { extras } from '../Noticias/Noticias'
import new2 from '../../assets/Images/Dos.png'
export const Section = () => {
  return (
 <>
 <section className='bg-black h-auto w-2/5'>

<img src={new2} alt="" className='p-10 pl-28  ' />
<h1></h1>
<p className='text-white'>16 abril 2024</p>
<h2 className='text-white'>El Barça se despide de la Champions tras caer frente al PSG (1-4) en un partido marcado por la expulsión de Ronald Araújo La expulsión de Araujo y el penalti de Cancelo marcaron un partido en el que los culés empezaron con ventaja (1-4)</h2>
</section>
 <section className='bg-blue-700 h-3/6 w-2/5 border-white'>
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
  )
}
