import React from 'react'

import{useDispatch} from 'react-redux'

import { useNavigate } from 'react-router-dom';
import { logOut } from '../../features/auth/authSlice';
import '../../styles.css';

export const AdminScreen = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();


    const cerrarSesion = ()=>{
        dispatch(logOut());
        navigate('/')
    }
    

   
  return (
    <div className='container admin'>
        <div className='row admin-row'>
            <div className='col-sm-3'>
                <button className='btn btn-outline-info btn-pedido' onClick={()=>{navigate('/admin/producto')}}>Crear Producto</button>
            </div>
            <div className='col-sm-3'>
                <button className='btn btn-outline-info btn-pedido' onClick={()=>{navigate('admin/producto/detalle')}}>Modificar Producto</button>
            </div>
            <div className='col-sm-3'>
                <button className='btn btn-outline-info btn-pedido' onClick={()=>{navigate('/admin/pedido')}}>Ver Pedidos</button>
            </div>
            <div className='col-sm-3'>
                <button className='btn btn-outline-info btn-pedido' onClick={cerrarSesion}>Cerrar Sesion</button>
            </div>
        </div>
    </div>
  )
}
