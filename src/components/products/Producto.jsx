import React from 'react'


export const Producto = (producto) => {

  
  return (
    <div className='producto-card'>
      <div className='producto-nombre'><h4>{producto.nombre}</h4></div>
      <div className='row row-producto'>
        <div className='col-sm-3 producto-precio'>
          <strong >${producto.precio} (porción)</strong>
        </div>

      </div>
      <div className='row row-producto'>
        <div className='col-sm-5 producto-descripcion'>
          <p className='descripcion'>{producto.descripcion}</p>
          {producto.disponible === true 
          ?(<strong>Dsiponible</strong>)
          :(<strong>Sin Stock</strong>) }
        </div>
        
      </div>

    </div>
  )
}
