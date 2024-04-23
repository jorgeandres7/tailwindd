import React from 'react';

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
        </div>
      </div>
    </div>
  );
};
