import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { crearProductos } from '../../features/productos/productoSlice';
import {useForm} from '../../hooks/useForm'

export const ProductoScreenCreate = () => {
  
  const [productoData, handleInputchange] = useForm({});
  const {nombre, precio, descripcion} = productoData;



  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const producto = useSelector((state)=>state.producto);

  useEffect(()=>{

      
    
  },[producto, navigate, dispatch])

  console.log(producto);

  const onSubmit = (e)=>{
    e.preventDefault();
    const formData = { nombre, precio, descripcion}

    dispatch(crearProductos(formData));
    navigate('/admin')

  }
   


  return (
    <div className='container login'>
        <div className='row'>
            <h3>Crear Producto</h3>
        </div>
        <div className='input-group mt-4 mb-4'>
            <form className='form-control login-form'
            onSubmit={onSubmit}
            >
            <h5> Ingresar los datos para que el producto sea guardado en la base de datos </h5>
            <input
            className='form-control mb-4 mt-4'
            placeholder='Nombre de producto'
            autoComplete='off'
            type={'text'}
            value={nombre}
            onChange={handleInputchange}
            name='nombre'></input>
            <input
            className='form-control mb-4 mt-4'
            placeholder='Precio'
            autoComplete='off'
            type={'number'}
            min={'1'}
            value={precio}
            onChange={handleInputchange}
            name='precio'></input>
            <textarea
            className='form-control mb-4 mt-4'
            placeholder='Descripción'
            autoComplete='off'
            type={'text'}
            maxLength={'300'}
            value={descripcion}
            onChange={handleInputchange}
            name='descripcion'></textarea>

            <button className='btn btn-ouline-primary btn-pedido'>Crear</button>

            </form>

        </div>

    </div>
  )
}
