import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { obtenerProductos } from '../../features/productos/productoSlice'
import { Item } from './Item'



export const ProductoAdmin = () => {

  const { productos } = useSelector((state) => state.producto)
  

  const dispatch = useDispatch();
  
  useEffect(()=>{
     dispatch(obtenerProductos())
  },[dispatch ])

  console.log(productos)

  


  return (
    <div className='productos-admin'>

      <h3> Menú para modificar los productos </h3>

      {productos.map(producto=>(<Item key={producto._id} {...producto}  />))}

     
    </div>
  )
}
