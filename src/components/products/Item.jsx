import React from 'react'
import { Link } from 'react-router-dom'

export const Item = (producto) => {
    console.log(producto)
  
    return (
    <div>
        <h5>{producto.nombre}</h5>
        <Link to={`/admin/producto/detalle/${producto._id}`}>Editar</Link>
    </div>
  )
}
