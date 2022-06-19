import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { crearPedido } from '../../features/pedidos/pedidoSlice';
import { obtenerProductos } from '../../features/productos/productoSlice';


import '../../styles.css';

export const PedidosScreen = () => {
  const { productos } = useSelector((state) => state.producto);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataForm, setDataForm] = useState({}) 
  
  const {nombre, email, telefono, cantidad} = dataForm;
  const handleData = (e)=>{
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }
  
  const [producto, setProducto] = useState('');


  
  useEffect(() => {
    dispatch(obtenerProductos())
  }, [dispatch])

  const onSubmit = (e) => {
    e.preventDefault();
    const pedidoData = { nombre, email, telefono, cantidad, producto }
    dispatch(crearPedido(pedidoData));
    navigate('/')

  }


  

  

  
  

  return (
    <div className='container pedidos'>
      <div className='row'>
        <h3 className='title'> Hacé tú pedido </h3>
      </div>
      <div className='input-group mb-3 form-holder'>
        <form className=' form-control mb-5 pedido-form' onSubmit={onSubmit} >
          <strong className='mt-2 mb-2'> Completá el formulario para que tu pedido sea registrado </strong>
          <input
            className='form-control mb-4 mt-4'
            placeholder='Nombre' type={'text'}
            name='nombre'
            onChange={handleData}
            value={nombre}
            autoComplete='off' ></input>
          <input
            className='form-control mb-4 mt-4'
            placeholder='Correo Electrónico'
            type={'email'}
            name='email'
            onChange={handleData}
            value={email}
            autoComplete='off' ></input>
          <input
            className='form-control mb-4'
            placeholder='Celular ej. 3584123123'
            type={'tel'}
            name='telefono'
            onChange={handleData}
            value={telefono}
            autoComplete='off'></input>
            <select className='form-select mb-4'  onChange={(e)=>{setProducto(e.target.value)}}>
              <option>Seleccione un producto</option>
              {productos.map(producto =>(
                <option key={producto._id} name={'producto'} value={producto.nombre} > {producto.nombre} </option>
              ))}
            </select>

          {/* Falta generar el select con la opciones para que el cliente elija el producto */}
          <input
            className='form-control mb-4'
            type={'number'}
            placeholder='Cantidad (porciones)'
            min={'1'}
            onChange={handleData}
            value={cantidad}
            name='cantidad' ></input>
          <button className='btn btn-outline-info btn-pedido'>Realizar pedido </button>
        </form>
      </div>
    </div>
  )
}
