import React from 'react';

export const Datos = ({ idNoticias, img, Fecha, Descricpcion }) => {
  return (
    <div>
        <div>id={idNoticias}</div>
        <div><img src={img} alt="" /></div>
        <p>Fecha={Fecha}</p>
        <h1>Descripcion={Descricpcion}</h1>
        
    </div>
  );
};
