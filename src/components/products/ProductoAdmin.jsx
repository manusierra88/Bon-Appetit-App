import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { obtenerProductos } from '../../features/productos/productoSlice'

export const ProductoAdmin = () => {

  const { productos } = useSelector((state) => state.producto)
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  useEffect(()=>{
     dispatch(obtenerProductos())
  },[dispatch])



  return (
    <div className='productos-admin'>

      <h3> Menú para modificar los productos </h3>

      <ul>
        {
          productos.map(producto =>
          (<li className='lista-productos-admin' key={producto._id}>
            <strong > {producto.nombre} <button
              onClick={()=>{navigate(`/admin/producto/detalle/${producto._id}`)}} 
              className='btn btn-outline ms-2'>Modificar</button>
            </strong>
          </li>))
        }

      </ul>


    </div>
  )
}
