import React from 'react';

<<<<<<< HEAD
export const Noticia = ({ idNews, img, date,tittle, Description }) => {
  return (
    <div className="">
      <div className='flex flex items-center'  id={idNews}>
        <div><img className='p-10' src={img} alt="Imagen de la noticia" /></div>
        <hr className='color-black' />
        <div className='flex flex-col '>
          <h1 className='text-2xl'>{tittle}</h1>
          <p className='text-black'>{date}</p>
          <p className='black '>{Description}</p>
          
          <hr className=''/>
          
          
=======
export const Noticia = ({ idNews, img, date, Description }) => {
  return (
    <div className="">
      <div className='flex' id={idNews}>
        <div><img className='h-50  flex items-center' src={img} alt="Imagen de la noticia" /></div>
        <hr className='color-white' />
        <div className='flex flex-col '>
          <p className='text-black'>{date}</p>
          <p className='black '>{Description}</p>
          <br />
          <hr className='pr-20'/>
>>>>>>> b940f83ffc919bbaac23b468149fc39526ea867d
        </div>
      </div>
    </div>
  );
};
