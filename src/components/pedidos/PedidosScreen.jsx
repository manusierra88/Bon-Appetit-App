import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductos } from '../../features/productos/productoSlice';

import '../../styles.css';

export const PedidosScreen = () => {
  const {productos} = useSelector((state)=>state.producto);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(obtenerProductos())
  },[dispatch])
  return (
    <div className='container pedidos'>
      <div className='row'>
        <h3 className='title'> Hacé tú pedido </h3>
      </div>
      <div className='input-group mb-3 form-holder'>
        <form className=' form-control mb-5 pedido-form'>
          <strong className='mt-2 mb-2'> Completá el formulario para que tu pedido sea registrado </strong>
          <input className='form-control mb-4 mt-4' placeholder='Correo Electrónico' type={'email'} name='email' autoComplete='off' ></input>
          <input className='form-control mb-4' placeholder='Celular ej. 3584000000' type={'tel'} name='telefono' autoComplete='off'></input>
          {/* <input className='form-control mb-4' placeholder='Producto'> */}
            <select className='form-select mb-4' name='producto'>
              <option >Seleccione un producto</option>
              {productos.map(producto=>(<option key={producto._id}>{producto.nombre}</option>))}
            </select>
          {/* </input> */}
          <input className='form-control mb-4' type={'number'} placeholder='Cantidad (porciones)' min={'1'} name='cantidad' ></input>
          <button className='btn btn-outline-info btn-pedido'>Enviar pedido </button>
        </form>
      </div>
    </div>
  )
}
