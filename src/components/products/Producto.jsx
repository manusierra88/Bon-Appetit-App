import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { borrarProducto } from '../../features/productos/productoSlice';


export const Producto = (producto) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth.user);

  console.log(producto)
  const deleteItem = () => {
    dispatch(borrarProducto(producto._id))
    navigate('/admin')

  }

  return (
    <div className='producto-card'>
      <div className='producto-nombre'><h4>{producto.nombre}</h4></div>
      {user && <button className='btn btn-outline' onClick={deleteItem} >Borrar</button>}
      <div className='row row-producto'>
        <div className='col-sm-3 producto-precio'>
          <strong >${producto.precio} (porción)</strong>
        </div>


      </div>
      <div className='row row-producto'>
        <div className='col-sm-5 producto-descripcion'>
          <p className='descripcion'>{producto.descripcion}</p>
          {producto.disponible === true
            ? (<strong>Dsiponible</strong>)
            : (<strong>Sin Stock</strong>)}
        </div>

      </div>

    </div>
  )
}
